import { useContext, useState } from "react";
import styled from "styled-components";
import LoginContext from "../pages/login/LoginContext";

export default function ButtonDay({ disabled }) {
	const { clickDay } = useContext(LoginContext);
	const [buttonColor, setButtonColor] = useState([
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
	]);
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
	const handleClick = (index) => {
		const newButtonColor = [...buttonColor];
		newButtonColor[index] = "#CFCFCF";
		setButtonColor(newButtonColor);
		setSelectedButtonIndex(index);
		if (clickDay.includes(index)) {
			clickDay.filter((i) => i !== index);
		} else {
			clickDay.push(index);
		}
	};
	return (
		<Button>
			<button
				type="button"
				className={selectedButtonIndex[0] === 0 ? "selected" : ""}
				style={{ background: buttonColor[0] }}
				onClick={() => handleClick(0)}
				disabled={disabled}
			>
				D
			</button>
			<button
				type="button"
				className={selectedButtonIndex[1] === 1 ? "selected" : ""}
				style={{ background: buttonColor[1] }}
				onClick={() => handleClick(1)}
				disabled={disabled}
			>
				S
			</button>
			<button
				type="button"
				className={selectedButtonIndex[2] === 2 ? "selected" : ""}
				style={{ background: buttonColor[2] }}
				onClick={() => handleClick(2)}
				disabled={disabled}
			>
				T
			</button>
			<button
				type="button"
				className={selectedButtonIndex[3] === 3 ? "selected" : ""}
				style={{ background: buttonColor[3] }}
				onClick={() => handleClick(3)}
				disabled={disabled}
			>
				Q
			</button>
			<button
				type="button"
				className={selectedButtonIndex[4] === 4 ? "selected" : ""}
				style={{ background: buttonColor[4] }}
				onClick={() => handleClick(4)}
				disabled={disabled}
			>
				Q
			</button>
			<button
				type="button"
				className={selectedButtonIndex[5] === 5 ? "selected" : ""}
				style={{ background: buttonColor[5] }}
				onClick={() => handleClick(5)}
				disabled={disabled}
			>
				S
			</button>
			<button
				type="button"
				className={selectedButtonIndex[6] === 6 ? "selected" : ""}
				style={{ background: buttonColor[6] }}
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
	}
	button.selected {
		color: #ffffff;
	}
`;
