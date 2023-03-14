import styled from "styled-components";
import logo from "../assets/logo-completa.svg";

export default function Logo(){
    return (
        <Img>
            <img alt="logo" src={logo} />
        </Img>
    )
}

const Img = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`