import styled from '@emotion/styled'
import React from 'react'

import { Junbotdae } from '../font/Fonts'
import Block from './components/Block'

const Container = styled(Junbotdae)`
    font-family: junbotdae;
    font-size: 30px;
    display: flex;
    height: 100px;
    border-bottom: solid 5px black;
    flex-direction:row;
    margin-bottom:40px;
    `

const Title = styled.span`
    font-size: 50px;
    line-height: 100px;
    vertical-align: middle;
    padding-left: 10px;
    margin: auto;
`

const Detail = styled.div`
    
`
const RoundButton = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    width: 30%;
    font-size: 20px;
    float: right;
`

export default function MoreReserved() {
    const info = [{ img: "https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg", name: "아이다", place: "블루스퀘어 신한카드홀", date: "2022.05.14 PM 02:00", seat: "A열 9번" }]

    return (
        <div>
            <Container>
                <Title>
                    내가 예약한 티켓
                </Title>
            </Container>
            <Detail>
                {info.map(info => (
                    <Block
                        to='/reservedinfo/1'
                        img={info.img}
                        name={info.name}
                        place={info.place}
                        date={info.date}
                        seat={info.seat}
                    />
                ))}
            </Detail>
            <hr></hr>
            <RoundButton>등록하기</RoundButton>
        </div>)
}
