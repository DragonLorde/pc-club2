import React, { useState, useEffect, useMemo } from 'react'
import Title from '../../UI/Title/Title.style'
import { Styled } from '../PcList/PcList.style'
import { Styled2 } from '../Pc/style/Pc.style'
import axios from 'axios'
import { API_URL } from '../../utils/API/urls'
import { useParams } from 'react-router-dom'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import Text from '../../UI/Text/Text.style'
import styled from 'styled-components'
import { PopUp, PopUptText } from '../../UI/PopUp/PopUp.style'

const CustomInput = styled(Input)`
   &[type=radio] {
        width:100px ;
   }
`

const {
    CreateContainer,
    CustomForm,
    ParkingBlock,
    Seet,
} = Styled2

const {
    ParkingListContainer,
} = Styled

const ParkUser = () => {
    const nav = useNavigate()
    let { id } = useParams()
    const [error, setError] = useState(false)
    const [parkingDataUser, setParkingDataUser] = useState({
        index: 0,
        id: id
    })
    const [parkingData, setParkingData] = useState<any>({
        lenght:0,
        reserved:[0],
    })
    const [isOpen, setIsOpen] = useState<boolean>(false);
    

    const getData = async () => {
        const response = await axios.get(`${API_URL.getPC}/${id}`)
        const data = response.data
        setParkingData(null)
        setParkingData(data)
    }
    useEffect(() => {
        const localItem = localStorage.getItem('sees')
        if(localItem) {
         
            const ses = JSON.parse(localItem)
            console.log(ses);
            if(ses.ses) {
                setError(true)
            }
        }

        getData()
    }, [])

    const closeSes = async () => {
        await axios.get(`${API_URL.closeSes}/${id}`)
        setError(false)
        localStorage.setItem('sees', JSON.stringify({
            ses: false,
            id: id,
        }))
    }

    const ParkingSeet = useMemo(() => {
        const arrMemo = []
        for(let i = 1; i <= parkingData.lenght; i++) {
            arrMemo.push(i)
        }
        return arrMemo
    }, [parkingData])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setParkingDataUser((prev) => ({...prev, [name]: parseInt(value)}))
        console.log(parkingData)
    }



    const onSubmitData = async (e: React.ChangeEvent<HTMLFormElement>) => {
        console.log('send');
        const dataPC = {
            id: id
        }
        e.preventDefault()
        const data = await axios.post(API_URL.seetPc, dataPC)
        setError(true)
        localStorage.setItem('sees', JSON.stringify({
            ses: true,
            id: id,
        }))
        window.location.reload(); 
        nav('/userDashboard')
    }

    return (
        <ParkingListContainer>
            <Title>
                Выберите тариф
            </Title>
            <br />
            <br />
            <CustomForm onSubmit={onSubmitData}>
                <Text>
                    <Input placeholder='Номер места' onChange={onChangeInput} name='hh' type='radio' value={3}/> 
                    Стандартый - 3 часа 
                </Text>
                <Text>
                    <Input  onChange={onChangeInput} name='hh' type='radio' checked value={6}/> 
                    Продвинутый - 6 часов
                </Text>
                <Text>
                    <Input  onChange={onChangeInput} name='hh' type='radio' value={9}/> 
                    Профи - 9 часов
                </Text>
                <Button> Начать </Button>
            </CustomForm>
            <br />
            <Title>
                Обзор ПК
            </Title>
            <br />
            <br />
            <Text>
                Процессор: {parkingData.cpu}
            </Text>
            <Text>
                Видеокарта: {parkingData.gpu}
            </Text>
            <Text>
                Ram: {parkingData.ram}
            </Text>
            <Text>
                Монитор: {parkingData.monitor}
            </Text>
            <CustomPopUP isOpen={error}>
                <PopUptText>
                    Сессия начата <br />
                    Закончите текущию сессию прежде чем начать новую
                </PopUptText>
                <Button onClick={closeSes}>Завершить сессию</Button>
            </CustomPopUP>
        </ParkingListContainer> 
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

export default ParkUser
