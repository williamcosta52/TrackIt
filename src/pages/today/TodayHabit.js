import { Habit, CheckButton } from "./style";
import v from "../../assets/V.png";
import { useState, useContext, useEffect } from "react";
import LoginContext from "../login/LoginContext";
import axios from "axios";

export default function TodayHabit({ i, cont }) {
	const [check, setCheck] = useState(false);
	const { userDados } = useContext(LoginContext);

	useEffect(() => {
		if (!cont.length === 0) {
			setCheck(true);
		}
	}, []);

	function verifyCheck() {
		if (check === false) {
			const config = {
				headers: {
					Authorization: `Bearer ${userDados.token}`,
				},
			};
			const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i.id}/check`;
			const promise = axios.post(url, {}, config);
			promise.then((r) => {
				cont.push("1");
				setCheck(true);
				console.log(cont);
			});
			promise.catch((e) => console.log(e.response));
		} else {
			const config = {
				headers: {
					Authorization: `Bearer ${userDados.token}`,
				},
			};
			const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i.id}/uncheck`;
			const promise = axios.post(url, {}, config);
			promise.then((r) => {
				cont.shift();
				setCheck(false);
				console.log(cont);
			});
			promise.catch((e) => console.log(e.response));
		}
	}

	return (
		<Habit>
			<div>
				<h1>{i.name}</h1>
				<p>Sequencia atual: {i.currentSequence} dias</p>
				<p>Seu recorde: {i.highestSequence} dias</p>
			</div>
			<CheckButton check={check} type="button" onClick={verifyCheck}>
				<img alt="check" src={v} />
			</CheckButton>
		</Habit>
	);
}
