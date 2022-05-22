import React from 'react'
import styled from 'styled-components'
import { ColorContainer } from '../../UI/ColorContainer/ColorContainer'
import back from '../../sourse/img/start.png'
import CustomLink from '../../UI/Link/Link'
import Title from '../../UI/Title/Title.style'

const StartPage = () => {
  return (
    <StartPageContainer>
        <ColorContainer />
        <Title>
            Добро пожаловать в игровой клуб
        </Title>
        <Linked to='/nextStart'>
            Next
        </Linked>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Linked = styled(CustomLink)`
    margin-top: 100px;
    width: 350px;
    height: 100px;
    background: #5A63B1;
    box-shadow: 11px 13px 43px 2px rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #FFFFFF;
`


export default StartPage