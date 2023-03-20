import { LoginStyled } from "../login/styled";
import Logo from "../../constants/Logo";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [name, setName] = useState([]);
	const [image, setImagem] = useState([]);
	const [disable, setDisable] = useState(false);
	const [spinner, setSpinner] = useState("Cadastrar");
	const navigate = useNavigate();

	function signup(e) {
		setDisable(true);
		setSpinner(
			<ThreeDots color="#ffffff" height="40" width="40" disabled={disable} />
		);
		e.preventDefault();
		const infoSign = {
			email: email,
			name: name,
			image: image,
			password: password,
		};
		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
		const promise = axios.post(url, infoSign);

		promise.then(() => {
			navigate("/");
		});
		promise.catch((err) => {
			alert(err.response.data.message);
			setSpinner("Cadastrar");
			setDisable(false);
		});
	}

	return (
		<>
			<Logo />
			<LoginStyled>
				<form onSubmit={signup}>
					<input
						data-test="email-input"
						type="email"
						placeholder="email"
						required
						value={email}
						disabled={disable}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						data-test="password-input"
						type="password"
						placeholder="senha"
						required
						value={password}
						disabled={disable}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						data-test="user-name-input"
						type="text"
						placeholder="nome"
						required
						value={name}
						disabled={disable}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						data-test="user-image-input"
						type="url"
						placeholder="foto"
						required
						value={image}
						disabled={disable}
						onChange={(e) => setImagem(e.target.value)}
					/>
					<button data-test="signup-btn" disabled={disable} type="submit">
						{spinner}
					</button>
				</form>
				<br />
				<Link data-test="login-link" to={"/"}>
					<p>Já tem uma conta? Faça login!</p>
				</Link>
			</LoginStyled>
		</>
	);
}
