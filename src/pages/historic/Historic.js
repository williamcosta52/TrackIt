import Header from "../../constants/Header";
import Footer from "../../constants/Footer";
import styled from "styled-components";

export default function Historic() {
	return (
		<Container>
			<Header />
			<HistoricDiv>
				<h1>Histórico</h1>
				<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
			</HistoricDiv>
			<Footer />
		</Container>
	);
}
const HistoricDiv = styled.div`
	margin-top: 100px;
	width: 90%;
	margin-left: 17px;
	h1 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
		margin-bottom: 17px;
	}
	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;
		color: #666666;
	}
`;
const Container = styled.div`
	background-color: rgb(242, 242, 242);
	height: 100%;
`;
