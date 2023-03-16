import Header from "../../constants/Header"
import Footer from "../../constants/Footer"
import { HabitStyle, ContainerHabit, AddNewHabit, AddButton, DivHabit } from "./styled"
import Habit from "./Habit"
import HabitText from "./HabitText"
import { useState } from "react"
import { useContext } from "react"
import LoginContext from "../login/LoginContext"

export default function Habits(){

    

    const { newHabit, setNewHabit, habit, addedHabit } = useContext(LoginContext);

    return (
        <ContainerHabit>
            <Header />
            <HabitStyle>
                <AddNewHabit>
                    <p>Meus hábitos</p>
                    <AddButton onClick={() => {
                        setNewHabit(<Habit />) 
                        }}><span>+</span></AddButton>
                </AddNewHabit>
                {newHabit}
                {addedHabit}
                <DivHabit>
                    {habit}
                </DivHabit>
            </HabitStyle>
            <Footer />
        </ContainerHabit>
    )
}