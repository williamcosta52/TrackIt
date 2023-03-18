import { useContext, useState } from "react";
import LoginContext from "../login/LoginContext";
import { HabitCard, HabitCardButton, SaveHabit } from "./styled";
import AddedHabit from "./AddedHabit";
import ButtonDay from "../../components/ButtonDay";
import axios from "axios";

export default function Habit() {
	const {
		setDayHabit,
		dayHabit,
		setNewHabit,
		setHabit,
		setAddedHabit,
		clickDay,
		userDados,
	} = useContext(LoginContext);
	const [disabled, setDisabled] = useState(false);

	function addingHabit(e) {
		e.preventDefault();
		setDisabled(true);
		setNewHabit("");
		setHabit("");
		const config = {
			headers: {
				Authorization: `Bearer ${userDados.token}`,
			},
		};
		const info = {
			name: dayHabit,
			days: clickDay,
		};
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
		const promise = axios.post(url, info, config);

		promise.then((r) => setDisabled(false), setDayHabit(""));
		promise.catch((e) => setDisabled(false), console.log(e));
	}
	return (
		<HabitCard data-test="habit-create-container">
			<form onSubmit={addingHabit}>
				<input
					data-test="habit-name-input"
					placeholder="nome do hábito"
					type="text"
					required
					value={dayHabit}
					disabled={disabled}
					onChange={(e) => setDayHabit(e.target.value)}
				/>
				<HabitCardButton>
					<ButtonDay disabled={disabled} />
				</HabitCardButton>
				<SaveHabit>
					<p
						data-test="habit-create-cancel-btn"
						onClick={() => setNewHabit("")}
					>
						Cancelar
					</p>
					<button
						disabled={disabled}
						data-test="habit-create-save-btn"
						type="submit"
					>
						Salvar
					</button>
				</SaveHabit>
			</form>
		</HabitCard>
	);
}
