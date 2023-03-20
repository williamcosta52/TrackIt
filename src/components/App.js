import { AppStyled } from "../constants/AppStyled";
import Logo from "../constants/Logo";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Habits from "../pages/habits/Habits";
import Today from "../pages/today/Today";
import Historic from "../pages/historic/Historic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContext from "../pages/login/LoginContext";
import { useState } from "react";
import HabitText from "../pages/habits/HabitText";

export default function App() {
	const [userDados, setUserDados] = useState({});
	const [dayHabit, setDayHabit] = useState("");
	const [newHabit, setNewHabit] = useState("");
	const [habit, setHabit] = useState(<HabitText />);
	const [addedHabit, setAddedHabit] = useState("");
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
	const [clickDay, setClickDay] = useState([]);
	const [percentage, setPercentage] = useState(0);

	const userValue = {
		userDados,
		setUserDados,
		dayHabit,
		setDayHabit,
		newHabit,
		setNewHabit,
		habit,
		setHabit,
		addedHabit,
		setAddedHabit,
		clickDay,
		selectedButtonIndex,
		setSelectedButtonIndex,
		setClickDay,
		percentage,
		setPercentage,
	};

	return (
		<LoginContext.Provider value={userValue}>
			<AppStyled>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Register />} />
						<Route path="/habitos" element={<Habits />} />
						<Route path="/hoje" element={<Today />} />
						<Route path="/historico" element={<Historic />} />
					</Routes>
				</BrowserRouter>
			</AppStyled>
		</LoginContext.Provider>
	);
}
