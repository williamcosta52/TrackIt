import trash from "../../assets/trash.svg"
import { useContext } from "react";
import LoginContext from "../login/LoginContext";
import { HabitDiv, TextImg, DivDays } from "./styled"

export default function AddedHabit(){

    const { dayHabit, clickDay } = useContext(LoginContext);
    const days = ["D", "S", "T" ,"Q", "Q", "S", "S"];
    return (
        <HabitDiv>
            <TextImg>
                <p>{dayHabit}</p>
                <img alt="trash-icon" src={trash} />
            </TextImg>
            <DivDays>
                {days.map((d, index) => (
                    <button key={index}>{d}</button>
                ))}
            </DivDays>
        </HabitDiv>
    )
}