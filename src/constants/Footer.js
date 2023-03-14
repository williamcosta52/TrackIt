import styled from "styled-components"
import img from "../assets/hoje.svg"

export default function Footer(){
    return (
        <FooterStyle>
            <p className="habits">Hábitos</p>
                <img src={img} />
            <p className="historic">Histórico</p>
        </FooterStyle>
    )
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
    background-color: #FFFFFF;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
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
`