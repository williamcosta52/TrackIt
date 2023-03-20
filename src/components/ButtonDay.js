import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import LoginContext from "../pages/login/LoginContext";

export default function ButtonDay({ disabled, days }) {
	const { clickDay, setClickDay, selectedButtonIndex, setSelectedButtonIndex } =
		useContext(LoginContext);
	const [buttonColor, setButtonColor] = useState([
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
	]);
	const [textColor, setTextColor] = useState([
		"#DBDBDB",
		"#DBDBDB",
		"#DBDBDB",
		"#DBDBDB",
		"#DBDBDB",
		"#DBDBDB",
		"#DBDBDB",
	]);
	const handleClick = (index) => {
		const newButtonColor = [...buttonColor];
		const newColor = [...textColor];
		if (textColor[index] === "#DBDBDB") {
			newColor[index] = "#FFFFFF";
			setTextColor(newColor);
		} else {
			newColor[index] = "#DBDBDB";
			setTextColor(newColor);
		}
		if (buttonColor[index] === "#ffffff") {
			newButtonColor[index] = "#CFCFCF";
			setButtonColor(newButtonColor);
		} else {
			newButtonColor[index] = "#ffffff";
			setButtonColor(newButtonColor);
		}
		setSelectedButtonIndex(index);
		if (clickDay.includes(index)) {
			setClickDay(clickDay.filter((i) => i !== index));
		} else {
			setClickDay([...clickDay, index]);
		}
	};
	return (
		<Button>
			<button
				type="button"
				className={
					selectedButtonIndex[0] === 0 || days.includes(0) ? "selected" : ""
				}
				style={
					days.includes(0)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[0], color: textColor[0] }
				}
				onClick={() => handleClick(0)}
				disabled={disabled}
			>
				D
			</button>
			<button
				type="button"
				className={
					selectedButtonIndex[1] === 1 || days.includes(1) ? "selected" : ""
				}
				style={
					days.includes(1)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[1], color: textColor[1] }
				}
				onClick={() => handleClick(1)}
				disabled={disabled}
			>
				S
			</button>
			<button
				type="button"
				className={
					selectedButtonIndex[2] === 2 || days.includes(0) ? "selected" : ""
				}
				style={
					days.includes(2)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[2], color: textColor[2] }
				}
				onClick={() => handleClick(2)}
				disabled={disabled}
			>
				T
			</button>
			<button
				type="button"
				className={
					selectedButtonIndex[3] === 3 || days.includes(3) ? "selected" : ""
				}
				style={
					days.includes(3)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[3], color: textColor[3] }
				}
				onClick={() => handleClick(3)}
				disabled={disabled}
			>
				Q
			</button>
			<button
				type="button"
				className={
					selectedButtonIndex[4] === 4 || days.includes(4) ? "selected" : ""
				}
				style={
					days.includes(4)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[4], color: textColor[4] }
				}
				onClick={() => handleClick(4)}
				disabled={disabled}
			>
				Q
			</button>
			<button
				type="button"
				className={
					selectedButtonIndex[5] === 5 || days.includes(5) ? "selected" : ""
				}
				style={
					days.includes(5)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[5], color: textColor[5] }
				}
				onClick={() => handleClick(5)}
				disabled={disabled}
			>
				S
			</button>
			<button
				type="button"
				className={
					selectedButtonIndex[6] === 6 || days.includes(6) ? "selected" : ""
				}
				style={
					days.includes(6)
						? { background: "#CFCFCF", color: "#FFFFFF" }
						: { background: buttonColor[6], color: textColor[6] }
				}
				onClick={() => handleClick(6)}
				disabled={disabled}
			>
				S
			</button>
		</Button>
	);
}
const Button = styled.div`
	button {
		width: 30px;
		height: 30px;
		background: "#ffffff";
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: ${(props) => props.theme.textColor};
		margin: 8px 2px;
		button.selectec {
			color: #ffffff;
		}
	}
`;
