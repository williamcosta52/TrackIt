import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import { TodayStyle, DivTitle, Habit } from "./style";
import { useEffect, useContext, useState } from "react";
import LoginContext from "../login/LoginContext";
import axios from "axios";
import dayjs from "dayjs";
import TodayHabit from "./TodayHabit";

export default function Today() {
	let data = dayjs().format("DD/MM");
	let weekDay = "";
	let cont = [];
	const num = 100;
	const { userDados, dayHabit } = useContext(LoginContext);
	const [informationH, setInformationH] = useState([
		{ id: "", name: "", done: "", currentSequence: "", highestSequence: "" },
	]);
	const config = {
		headers: {
			Authorization: `Bearer ${userDados.token}`,
		},
	};
	if (dayjs().format("d") === 0) {
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
	useEffect(() => {
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
		const promise = axios.get(url, config);
		promise.then((r) => {
			setInformationH(r.data);
		});
		promise.catch((e) => alert(e.response.data));
	}, [dayHabit]);
	let result = (cont.length / informationH.length) * num;
	return (
		<TodayStyle>
			<Header />
			<DivTitle>
				<h1>
					{weekDay}, {data}
				</h1>
				{!cont.length === 0 ? (
					`${result} % dos hábitos concluídos`
				) : (
					<p>Nenhum hábito concluído ainda</p>
				)}
			</DivTitle>
			{informationH.map((i, index) => (
				<TodayHabit key={index} i={i} cont={cont} />
			))}
			<Footer />
		</TodayStyle>
	);
}
