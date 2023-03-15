import { DivHabit, HabitCard, HabitCardButton, SaveHabit } from "./styled"

export default function Habit(){
    return (
    <HabitCard>
        <input placeholder="nome do hábito"/>
            <HabitCardButton>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </HabitCardButton>
        <SaveHabit>
            <p>Cancelar</p>
            <button>Salvar</button>
        </SaveHabit>
    </HabitCard>
    )
}