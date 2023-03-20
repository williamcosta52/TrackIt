import trash from "../../assets/trash.svg";
import { useContext } from "react";
import LoginContext from "../login/LoginContext";
import { HabitDiv, TextImg, DivDays } from "./styled";
import ButtonDay from "../../components/ButtonDay";
import axios from "axios";

export default function AddedHabit({ h, setInfoHabits }) {
	const { userDados } = useContext(LoginContext);
	const config = {
		headers: {
			Authorization: `Bearer ${userDados.token}`,
		},
	};
	function deleteHabit() {
		const confirmation = window.confirm("Deseja excluir este hábito?");
		if (confirmation === true) {
			const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`;
			const promise = axios.delete(url, config);
			promise.then(() => {
				alert("Hábito excluído com sucesso!");
				const url =
					"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
				const promise = axios.get(url, config);
				promise.then((r) => setInfoHabits(r.data));
			});
			promise.catch((e) => alert(e.response.data.message));
		}
	}
	return (
		<HabitDiv data-test="habit-container">
			<TextImg>
				<p data-test="habit-name">{h.name}</p>
				<img
					data-test="habit-delete-btn"
					alt="trash-icon"
					src={trash}
					onClick={deleteHabit}
				/>
			</TextImg>
			<DivDays>
				<ButtonDay disabled={true} days={h.days} />
			</DivDays>
		</HabitDiv>
	);
}
