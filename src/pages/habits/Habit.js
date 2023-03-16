import { useContext } from "react";
import LoginContext from "../login/LoginContext";
import { HabitCard, HabitCardButton, SaveHabit } from "./styled"
import AddedHabit from "./AddedHabit"


export default function Habit(){

    const { setDayHabit, dayHabit, newHabit, setNewHabit, setHabit, clickDay, setAddedHabit } = useContext(LoginContext)

    const days = ["D", "S", "T" ,"Q", "Q", "S", "S"];

    function addingHabit(e){
        e.preventDefault();
        setNewHabit("");
        setHabit("");
        setAddedHabit(<AddedHabit />);
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
            onChange={e => setDayHabit(e.target.value)}
            />
                <HabitCardButton>
                    {days.map((d, index) => (
                        <button data-test="habit-day" onClick={(e) =>{ 
                            e.preventDefault()
                            clickDay.push(d) 
                        }} key={index}>{d}</button>
                    ))}
                </HabitCardButton>
                <SaveHabit>
                    <p data-test="habit-create-cancel-btn">Cancelar</p>
                    <button data-test="habit-create-save-btn" type="submit">Salvar</button>
                </SaveHabit>
        </form>
    </HabitCard>
    )
}