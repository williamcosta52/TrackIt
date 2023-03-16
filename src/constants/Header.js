import styled from "styled-components"
import img from "../assets/download.png"
import { useContext } from "react"
import LoginContext from "../pages/login/LoginContext"

export default function Header(){

    const { userDados } = useContext(LoginContext);

    return (
        <HeaderStyled data-test="header">
            <h1>TrackIt</h1>
            <img alt="profile-img" src={userDados.image} />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0px;
    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 18px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 14px;
    }
`