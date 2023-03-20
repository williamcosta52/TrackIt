import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import { TodayStyle, DivTitle } from "./style";
import { useEffect, useContext, useState } from "react";
import LoginContext from "../login/LoginContext";
import axios from "axios";
import dayjs from "dayjs";
import TodayHabit from "./TodayHabit";

export default function Today() {
	let data = dayjs().format("DD/MM");
	let weekDay = "";
	const [completedCount, setCompletedCount] = useState(0);
	const { userDados, dayHabit, percentage, setPercentage } =
		useContext(LoginContext);
	const [pColor, setPcolor] = useState(false);
	const [informationH, setInformationH] = useState([
		{
			id: "",
			name: "",
			done: "",
			currentSequence: "",
			highestSequence: "",
		},
	]);
	const config = {
		headers: {
			Authorization: `Bearer ${userDados.token}`,
		},
	};
	if (dayjs().format("d") === "0") {
		weekDay = "Domingo";
	} else if (dayjs().format("d") === "1") {
		weekDay = "Segunda";
	} else if (dayjs().format("d") === "2") {
		weekDay = "Terça";
	} else if (dayjs().format("d") === "3") {
		weekDay = "Quarta";
	} else if (dayjs().format("d") === "4") {
		weekDay = "Quinta";
	} else if (dayjs().format("d") === "5") {
		weekDay = "Sexta";
	} else if (dayjs().format("d") === "6") {
		weekDay = "Sabado";
	}
	let finished = 0;
	for (let i = 0; i < informationH.length; i++) {
		if (informationH[i].done) {
			finished++;
		}
	}
	let notDone = 0;
	for (let i = 0; i < informationH.length; i++) {
		if (informationH[i].done && pColor === false) {
			setPcolor(true);
			break;
		}
		if (informationH[i].done === false && pColor === true) {
			notDone++;
		}
	}
	if (notDone === informationH.length && pColor === true) {
		setPcolor(false);
	}
	useEffect(() => {
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
		const promise = axios.get(url, config);
		promise.then((r) => {
			const habits = r.data;
			setInformationH(habits);
		});
		promise.catch((e) => alert(e.response.data));
	}, [dayHabit]);
	useEffect(() => {
		setPercentage(Math.round((finished / informationH.length) * 100));
	}, [informationH]);
	return (
		<TodayStyle>
			<Header />
			<DivTitle pColor={pColor}>
				<h1 data-test="today">
					{weekDay}, {data}
				</h1>
				<p data-test="today-counter">
					{informationH.length > 0
						? `${percentage}% dos hábitos concluídos`
						: "Nenhum hábito concluído ainda"}
				</p>
			</DivTitle>
			{informationH.map((i, index) => (
				<TodayHabit
					key={index}
					i={i}
					setCompletedCount={setCompletedCount}
					setInformationH={setInformationH}
					done={i.done}
				/>
			))}
			<Footer />
		</TodayStyle>
	);
}
