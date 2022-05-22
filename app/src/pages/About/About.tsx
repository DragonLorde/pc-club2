import React from 'react'
import styled from 'styled-components'
import back from '../../sourse/img/start.png'
import { ColorContainer } from '../../UI/ColorContainer/ColorContainer'
import CustomLink from '../../UI/Link/Link'
import Text from '../../UI/Text/Text.style'
import Title from '../../UI/Title/Title.style'

const About = () => {
  return (
    <StartPageContainer>
        <ColorContainer />
        <Title>
            О нас
        </Title>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text>
            ПОБЕЖДАЙ В ЛУЧШЕМ <br />
            ИГРОВОМ КЛУБЕ <br />
            Смелость замысла всегда измеряется <br />
            смелостью тех, кто решился претворить этот <br />
            замысел в жизнь. <br />
            Мы опросили тысячи игроков, чтобы поднять <br />
            киберспорт на ступень выше. <br />
        </Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CustomLink to='/nextStart'>
            Назад
        </CustomLink>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
`

const Linked = styled(CustomLink)`
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
    margin: 40px;
    color: #FFFFFF;
`

export default About
