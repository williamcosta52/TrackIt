import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import {
	HabitStyle,
	ContainerHabit,
	AddNewHabit,
	AddButton,
	DivHabit,
} from "./styled";
import Habit from "./Habit";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../login/LoginContext";
import axios from "axios";
import AddedHabit from "./AddedHabit";

export default function Habits() {
	const { newHabit, setNewHabit, habit, userDados, setSelectedButtonIndex } =
		useContext(LoginContext);
	const [infoHabits, setInfoHabits] = useState([
		{ id: "", name: "", days: "" },
	]);
	const config = {
		headers: {
			Authorization: `Bearer ${userDados.token}`,
		},
	};
	useEffect(() => {
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
		const promise = axios.get(url, config);

		promise.then((r) => {
			setInfoHabits(r.data);
		});
		promise.catch((er) => {
			console.log(er.response.data.message);
		});
	}, [infoHabits]);
	return (
		<ContainerHabit>
			<Header />
			<HabitStyle>
				<AddNewHabit>
					<p>Meus hábitos</p>
					<AddButton
						data-test="habit-create-btn"
						onClick={() => {
							setNewHabit(<Habit />);
							setSelectedButtonIndex(-1);
						}}
					>
						<span>+</span>
					</AddButton>
				</AddNewHabit>
				{newHabit}
				{infoHabits.length === 0 ? (
					<DivHabit>{habit}</DivHabit>
				) : (
					infoHabits.map((h, index) => (
						<AddedHabit setInfoHabits={setInfoHabits} key={index} h={h} />
					))
				)}
			</HabitStyle>
			<Footer />
		</ContainerHabit>
	);
}
