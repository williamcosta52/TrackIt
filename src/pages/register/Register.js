import { LoginStyled } from "../login/styled"
import Logo from "../../constants/Logo"

export default function Register(){
    return (
        <>
        <Logo />
        <LoginStyled>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <input placeholder="nome"></input>
            <input placeholder="foto"></input>
            <button>Cadastrar</button>
            <br />
            <p>Já tem uma conta? Faça login!</p>
        </LoginStyled>
        </>
    )
}