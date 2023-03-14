import styled from "styled-components";

export const HabitStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`
export const ContainerHabit = styled.div`
    background-color: rgb(242, 242, 242);
    height: 100%;
`
export const AddNewHabit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        margin-top: 28px;
        margin-left: 17px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`
export const AddButton = styled.button`
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        margin-top: 30px;
        margin-right: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 4px;
        span {
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            color: #FFFFFF;
            width: 16px;
            height: 34px;
            text-align: center;
        }
`
export const DivHabit = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 338px;
    height: 74px;
    margin-top: 25px;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-left: 17px;
    }
`