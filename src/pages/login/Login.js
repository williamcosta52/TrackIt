import { LoginStyled } from "./styled";
import Logo from "../../constants/Logo"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import LoginContext from "./LoginContext";

export default function Login(e){
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [disable, setDisable] = useState(false);
    const [spinner, setSpinner] = useState("Entrar");
    const navigate = useNavigate();
    const { setUserDados } = useContext(LoginContext);

    function login(e){
        setDisable(true);
        setSpinner(<ThreeDots color="#ffffff"  height="40" width="40"/>);
        e.preventDefault();
        const userInfo = {
            email: email,
            password: password
        }
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(url, userInfo);

        promise.then((resp) => {
            setDisable(false);
            setUserDados(resp.data);
            navigate("/habitos");
        });
        promise.catch((err) => { 
            alert(err.response.data.message);
            setDisable(false);
            setSpinner("Entrar");
        });
            
    }
    return (
            <>
            <Logo />
            <LoginStyled>
                <form onSubmit={login}>
                    <input 
                    type="email"
                    placeholder="email"
                    required
                    value={email}
                    disabled={disable}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input
                    placeholder="senha"
                    type="password"
                    required
                    value={password}
                    disabled={disable}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button disabled={disable} type="submit">{spinner}</button>
                </form>
                <br />
                <Link to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </LoginStyled>
            </>
    )
}