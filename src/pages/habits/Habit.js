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
    <HabitCard>
        <form onSubmit={addingHabit}>
            <input 
            placeholder="nome do hábito"
            type="text"
            required
            value={dayHabit}
            onChange={e => setDayHabit(e.target.value)}
            />
                <HabitCardButton>
                    {days.map((d, index) => (
                        <button onClick={(e) =>{ 
                            e.preventDefault()
                            clickDay.push(d) 
                        }} key={index}>{d}</button>
                    ))}
                </HabitCardButton>
                <SaveHabit>
                    <p>Cancelar</p>
                    <button type="submit">Salvar</button>
                </SaveHabit>
        </form>
    </HabitCard>
    )
}