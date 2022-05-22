import React from 'react'
import { Styled } from './style/StartDash.style'
import car from '../../../src/sourse/img/mg2.png'

const {
    StartContainer,
    StartImg,
    StartTitle,
} = Styled

const StartDash = () => {
  return (
    <StartContainer>
        <StartTitle>
            Компютерный клуб
        </StartTitle>
        <StartImg src = {car} />
    </StartContainer>
  )
}

export default StartDash
