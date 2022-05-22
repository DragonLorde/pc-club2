import React, { FC, useEffect, useState } from 'react'
import Header from '../../UI/Header/Header'
import Menu from '../../UI/Menu/Menu'
import { checkSession } from '../../utils/checkSession'
import { Styled } from './style/DashBoard.style'
import { useNavigate } from 'react-router-dom'
import StartDash from '../../UI/StartDash/StartDash.style'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { PopUp } from '../../UI/PopUp/PopUp.style'
import { PopUptText } from '../../UI/PopUp/PopUp.style'
import Button from '../../UI/Button/Button'
import axios from 'axios'
import { API_URL } from '../../utils/API/urls'

const {
  DashBoardContainer,
  DashBoardRightContainer,
} = Styled

const DashBoardUser:FC = () => {

  const nav = useNavigate()
  const [currentSession, setCurrentSesion] = useState<any>(' ')
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [idPC, setIdPC] = useState(null)

  const closeSes = async () => {
    await axios.get(`${API_URL.closeSes}/${idPC}`)
    setIsOpen2(false)
    localStorage.setItem('sees', JSON.stringify({ses: false}))
  }


  useEffect(() => {
    const session = checkSession('user')
    if(!session) {
      nav('/login')
      return
    }
    setCurrentSesion(session)    
    if(!session.data.pass) {
      nav('/userDashboard')
    }
    const localItem = localStorage.getItem('sees')
        if(localItem) {
         
            const ses = JSON.parse(localItem)
            console.log(ses);
            if(ses.ses) {
              setIdPC(ses.id)
              setIsOpen2(true)
            }
        }
  }, [isOpen2, setIdPC, idPC])

  return (
    <DashBoardContainer>
      <Menu links={[
        ['userDashboard/pcList', 'Выбор пк'],
        ['userDashboard/document', 'Информация о тарифах'],
      ]}/>
      <DashBoardRightContainer>
        <Header userName={currentSession?.data?.login}></Header>
        <Outlet />
        <CustomPopUP isOpen={isOpen2}>
                <PopUptText>
                    Сессия начата <br />
                    Закончите текущию сессию прежде чем начать новую
                </PopUptText>
                <Button onClick={closeSes}>Завершить сессию</Button>
            </CustomPopUP>
      </DashBoardRightContainer>
    </DashBoardContainer>
  )
}

const CustomPopUP = styled(PopUp)`
    transform: translateX(-50%);
    flex-direction: column;
    left: 50%;
    top: 30%;
    z-index: 500;
    width: 500px;
    height: 300px;
`

export default DashBoardUser