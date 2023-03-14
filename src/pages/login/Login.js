import { LoginStyled } from "./styled";
import Logo from "../../constants/Logo"

export default function Login(){
    return (
        <>
        <Logo />
        <LoginStyled>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <button>Entrar</button>
            <br />
            <p>Não tem uma conta? Cadastre-se!</p>
        </LoginStyled>
        </>
    )
}