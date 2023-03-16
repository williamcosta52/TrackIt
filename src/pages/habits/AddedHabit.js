import trash from "../../assets/trash.svg"
import { useContext } from "react";
import LoginContext from "../login/LoginContext";
import { HabitDiv, TextImg, DivDays } from "./styled"

export default function AddedHabit(){

    const { dayHabit, clickDay } = useContext(LoginContext);
    const days = ["D", "S", "T" ,"Q", "Q", "S", "S"];
    return (
        <HabitDiv  data-test="habit-container">
            <TextImg>
                <p data-test="habit-name">{dayHabit}</p>
                <img data-test="habit-delete-btn" alt="trash-icon" src={trash} />
            </TextImg>
            <DivDays>
                {days.map((d, index) => (
                    <button data-test="habit-day" key={index}>{d}</button>
                ))}
            </DivDays>
        </HabitDiv>
    )
}