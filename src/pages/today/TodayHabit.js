import { Habit, CheckButton } from "./style";
import v from "../../assets/V.png";
import { useState, useContext } from "react";
import LoginContext from "../login/LoginContext";
import axios from "axios";

export default function TodayHabit({
	i,
	setCompletedCount,
	setInformationH,
	done,
}) {
	const [check, setCheck] = useState(false);
	const { userDados } = useContext(LoginContext);
	if (check === false && i.done) {
		setCheck(true);
	} else if (check === true && i.done === false) {
		setCheck(false);
	}

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
				setCompletedCount((prevCount) => prevCount + 1);
				const url =
					"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
				const promise = axios.get(url, config);
				promise.then((r) => setInformationH(r.data));
				promise.catch((e) => alert(e.response.data.message));
			});
			promise.catch((e) => alert(e.response.data.message));
		} else {
			const config = {
				headers: {
					Authorization: `Bearer ${userDados.token}`,
				},
			};
			const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i.id}/uncheck`;
			const promise = axios.post(url, {}, config);
			promise.then((r) => {
				const url =
					"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
				const promise = axios.get(url, config);
				promise.then((r) => setInformationH(r.data));
				promise.catch((e) => alert(e.response.data.message));
				setCompletedCount((prevCount) => prevCount - 1);
			});
			promise.catch((e) => alert(e.response.data.message));
		}
	}
	return (
		<Habit
			done={done}
			currentSequence={i.currentSequence}
			highest={i.highestSequence}
			data-test="today-habit-container"
		>
			<div>
				<h1 data-test="today-habit-name">{i.name}</h1>
				<p data-test="today-habit-sequence" className="current">
					Sequencia atual: {i.currentSequence} dias
				</p>
				<p data-test="today-habit-record" className="highest">
					Seu recorde: {i.highestSequence} dias
				</p>
			</div>
			<CheckButton
				data-test="today-habit-check-btn"
				check={check}
				type="button"
				onClick={verifyCheck}
			>
				<img alt="check" src={v} />
			</CheckButton>
		</Habit>
	);
}
