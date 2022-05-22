import React from 'react'
import styled from 'styled-components'
import Text from '../../UI/Text/Text.style'

const Documents = () => {
  return (
    <DonlowadContainer>
        <Text>
            Стандартный тариф - 3 часа игрвого времени с момента нажатия кнопки
        </Text>
        <br />
        <br />
        <br />
        <Text>
            Продвинутый тариф - 6 часов игрвого времени с момента нажатия кнопки
        </Text>
        <br />
        <br />
        <br />
        <Text>
            Профессиональный тариф - 9 часа игрвого времени с момента нажатия кнопки
        </Text>
    </DonlowadContainer>
  )
}

const DonlowadLink = styled.a`
    color: white;
    font-size: 32px;
    margin: 20px;
`

const DonlowadContainer = styled.div`
    display: flex;
    width: calc(100% - 100px);
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    flex-direction: column;
`

export default Documents