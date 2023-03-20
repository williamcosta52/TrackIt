import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/hoje.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import LoginContext from "../pages/login/LoginContext";

export default function Footer() {
	const { percentage } = useContext(LoginContext);
	return (
		<FooterStyle data-test="menu">
			<Link data-test="habit-link" to="/habitos">
				<p className="habits">Hábitos</p>
			</Link>
			<Link data-test="today-link" to="/hoje">
				<div
					style={{
						width: 90,
						height: 90,
						marginBottom: "30px",
					}}
				>
					<CircularProgressbar
						value={percentage}
						text="Hoje"
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: "#3e98c7",
							pathColor: "#fff",
							trailColor: "transparent",
							textColor: "#FFFFFF",
						})}
					/>
					;
				</div>
			</Link>
			<Link data-test="history-link" to="/historico">
				<p className="historic">Histórico</p>
			</Link>
		</FooterStyle>
	);
}

const FooterStyle = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0px;
	left: 0px;
	background-color: #ffffff;
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;
		text-align: center;
		color: #52b6ff;
	}
	.habits {
		margin-left: 36px;
	}
	.historic {
		margin-right: 36px;
	}
	img {
		margin-bottom: 45px;
	}
	a {
		text-decoration: none;
	}
`;
