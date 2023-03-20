import styled from "styled-components";

export const TodayStyle = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgb(242, 242, 242);
`;
export const DivTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 100px;
	margin-left: 17px;
	margin-bottom: 28px;
	h1 {
		font-family: "Lexend Deca";
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
	}
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;
		color: ${(props) => (props.pColor ? "#8FC549" : "#bababa")} !important;
	}
`;
export const Habit = styled.div`
	width: 340px;
	height: 94px;
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	margin-left: 18px;
	margin-bottom: 10px;
	h1 {
		margin-left: 10px;
		margin-bottom: 7px;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: #666666;
	}
	p {
		margin-left: 15px;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 12.976px;
		line-height: 16px;
		color: #666666;
	}
	.current {
		color: ${(props) => (props.done ? "#8FC549" : "")};
	}
	.highest {
		color: ${(props) =>
			props.currentSequence === props.highest && props.currentSequence !== 0
				? "#8FC549"
				: ""};
	}
`;
export const CheckButton = styled.button`
	width: 69px;
	height: 69px;
	background: ${(props) => (props.check ? "#8FC549" : "#ebebeb")};
	border: 1px solid #e7e7e7;
	border-radius: 5px;
	margin-right: 13px;
`;
