import React, {FC, useEffect, useState} from 'react'
import Title from '../../UI/Title/Title.style'
import { Styled } from '../PcList/PcList.style'
import { useNavigate } from 'react-router-dom'
import { checkSession } from '../../utils/checkSession'
import { API_URL } from '../../utils/API/urls'
import axios from 'axios'
import ListContainer from '../../UI/List/List.style'
import CustomLink from '../../UI/Link/Link'

const {
    ParkingListContainer,
} = Styled


const ParkingListUser:FC = () => {
    const [render, setRender] = useState(true);
    const [parkingData, setParkingData] = useState<any[]>([{
        name:'',
        location:'',
        item:'',
        lenght:0,
    }])
    const nav = useNavigate()
    const getData = async () => {
        const response = await axios.get(API_URL.getAllPC)
        const data = response.data
        setParkingData(data)
    }
    useEffect(() => {
        const localItem = localStorage.getItem('sees')
        if(localItem) {
         
            const ses = JSON.parse(localItem)
            console.log(ses);
            if(ses.ses) {
              setRender(false)
            }
        }
        getData()
    }, [])
    return (
    <ParkingListContainer>

        <Title>
            Список ПК
        </Title>
        <div className='wrap' style={{
            justifyContent:'initial'
        }}>
            {render && parkingData && parkingData.map((item, index) => (
                <ListContainer key={index} to={ item.reserved ? `/userDashboard/pcList` : `../park/${item._id}`} isFree={item.reserved}>
                    <p>Цпу: <span>{item.cpu}</span> </p>
                    <p>Видеокарта: <span>{item.gpu}</span></p>
                    <p>Монитор: <span>{item.monitor}</span> </p>
                    <p>Ram: <span>{item.ram}</span> </p>
                    <p>Свободно: <span>{item.reserved ? 'нет' : 'да'}</span> </p>
                </ListContainer>
            ))}
        </div>
    </ParkingListContainer>
  )
}

export default ParkingListUser
