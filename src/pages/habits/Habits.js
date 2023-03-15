import Header from "../../constants/Header"
import Footer from "../../constants/Footer"
import { HabitStyle, ContainerHabit, AddNewHabit, AddButton } from "./styled"
import Habit from "./Habit"

export default function Habits(){

    return (
        <ContainerHabit>
            <Header />
            <HabitStyle>
                <AddNewHabit>
                    <p>Meus hábitos</p>
                    <AddButton><span>+</span></AddButton>
                </AddNewHabit>
                {/* <DivHabit>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </DivHabit> */}
                <Habit />
            </HabitStyle>
            <Footer />
        </ContainerHabit>
    )
}