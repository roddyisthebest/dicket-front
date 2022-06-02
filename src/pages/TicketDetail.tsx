import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import SeatImage from "../images/Seats.png"

import { GureumGothic, GureumGothicSpan } from '../font/Fonts'
import Info from './components/Info'
import { Button } from './components/MainComponents'
import ReservationInput from './components/ReservationInput'
import SeatPopUp from './components/SeatPopUp'
import SubInformation from './components/SubInformation'
import { useDispatch } from 'react-redux'
import { setReservationInfo } from '../slice'
import { useNavigate } from 'react-router-dom'



const Container = styled.div`
    
`

const MainInformationContainer = styled.div`
    margin-top:40px;
    display:flex;
    flex-direction:row;
    padding-bottom: 40px;

`


const ImageContianer = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ReservationInformationContainer = styled.div`
    flex:1;
    /* background-color:yellow; */
    display:flex;
    flex-direction:column;
    
`

const ReservationInformationHeader = styled(GureumGothic)`
    font-size: 50px;
    padding-bottom:20px;
    border-bottom: 4px outset black;
    /* box-shadow: 0 5px 5px 0px black; */
    &:after {
        /* content: " 🦄"; */
        /* position:relative; */
        /* flex:1; */
        /* width:100%; */
        /* bottom:1px;
        z-index:-1;
        transform:scale(.9);
        box-shadow: 0px 0px 8px 2px #000000; */
    }
`

const DivisionLine = styled.hr`
    /* color: black; */
    border: 0px;
    background-color: black;
    height: 3px;
    box-shadow: 0px 5px 5px;
    /* width : 50%;
    height : 50px;
    background-color : pink; */
`
const ButtonContainer = styled.div`
    flex:1;
    /* background-color:blue; */
    /* place-self: inherit; */
    /* justify-self: flex-end; */
    /* align-self: flex-end; */
    /* height:100%; */
    display:flex;
    justify-content: space-between;
`

const ReservationButton = styled(Button)`
    align-self: flex-end;
    ${(prop) => prop.value === true
        ? 'background-color:gray'
        : null}
    /* justify-self:flex-start; */
`
const CancelButton = styled(Button)`
    border: 5px solid red;
    background-color:white;
    color:red;
    align-self: flex-end;

`


export const Text = styled(GureumGothicSpan)`
    font-size: 24px;
`
const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:40px;
`

const MainImage = styled.img`
    border-radius:44px;
    height:638px;
    width:463px;
    border: 5px solid black;
`


export default function TicketDetail() {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const concertPriceList = [
        { class: "가열", price: "50,000원", seatNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
        { class: "A열", price: "40,000원", seatNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
        { class: "B열", price: "30,000원", seatNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
        { class: "C열", price: "20,000원", seatNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    ]

    const concertInformation = {
        name: '뮤지컬 <아이다>',
        location: '블루스퀘어 신한카드홀',
        date: '2022.05.10',
        runningTime: '160분',
        time: '17:00 ~ 22:40',
        age: '8세이상 관람가능',
        seatPriceList: concertPriceList
    }
    const { name, location, date, time, seatPriceList } = concertInformation

    const [reservationMode, setReservationMode] = useState(false)
    // const [isClosed, setClosed] = useState(false)
    const isClosed = false
    const [isPopUp, setPopUp] = useState(false)

    useEffect(() => {
        dispatch(setReservationInfo({
            name: name,
            location: location,
            time: time,
            date: date,
            priceList: seatPriceList
        }))
    }, [])
    // }, [dispatch])

    return (
        <Container>
            {isPopUp ?
                <SeatPopUp setPopUp={setPopUp} seatImage={SeatImage} />
                :
                <MainInformationContainer>
                    <ImageContianer>
                        <MainImage
                            src='https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg'
                        />
                    </ImageContianer>
                    <ReservationInformationContainer>
                        <ReservationInformationHeader>
                            {concertInformation.name}
                        </ReservationInformationHeader>
                        <DivisionLine />
                        {!reservationMode ? <InfoContainer>
                            < Info name='장소' content={concertInformation.location} />
                            < Info name='공연날짜' content={concertInformation.date} />
                            <Info
                                name='시간'
                                content='17:00 ~ 22:40'
                            />
                            < Info name='관람연령' content={concertInformation.age} />
                            < Info name='기격' content={concertInformation.seatPriceList} />
                        </InfoContainer> :
                            // null
                            <ReservationInput setPopUp={setPopUp} />
                        }
                        <ButtonContainer>
                            {
                                reservationMode ?
                                    <>
                                        <CancelButton
                                            onClick={() => {
                                                setReservationMode(!reservationMode);
                                            }}
                                        >
                                            예약 취소
                                        </CancelButton>
                                        <ReservationButton
                                            onClick={() => {
                                                // setReservationMode(!reservationMode);
                                                navigation(`/reservedinfo/${1}`)
                                            }}
                                        >
                                            예약완료하기
                                        </ReservationButton>
                                    </>
                                    : <ReservationButton
                                        value={isClosed}
                                        onClick={() => {
                                            setReservationMode(!reservationMode);
                                        }}
                                        disabled={isClosed}
                                    >
                                        {isClosed ? "종 료" : "예약하기"}
                                    </ReservationButton>
                            }
                        </ButtonContainer>
                    </ReservationInformationContainer>
                </MainInformationContainer>}
            <SubInformation
                menus={['공연 정보']}
                content={['공연 상세 정보입니다.']}
            />
        </Container >
    )
}
