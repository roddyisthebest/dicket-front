import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
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

const Look = styled.button`
    background-color:transparent;
    border: none;
    font-size: 20px;
    margin-left: auto;
`
const Lookcontainer = styled.div`
    display: flex;
    height: 50px;
    flex-direction:row;
`

export default function MyConcerts() {
    const info = [{ img: "https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg", name: "아이다", place: "블루스퀘어", date: "05.05", seat: "A열 2번" }];
    const navigation = useNavigate()

    return (
        <div>
            <Container>
                <Title>
                    내가 올린 콘서트
                </Title>
            </Container>
            <Detail>
                {info.map(info => (
                    <Block
                        to='/concertdetail/*'
                        img={info.img}
                        name={info.name}
                        place={info.place}
                        date={info.date}
                        seat={info.seat}
                    />
                ))}
            </Detail>
            <Lookcontainer>
                <Look onClick={() => {
                    navigation('/concertmanager')
                }}>
                    자세히 보기
                </Look>
            </Lookcontainer>
            <hr></hr>
            <RoundButton
                onClick={() => {
                    navigation('/edit')
                }}
            >
                등록하기
            </RoundButton>
        </div>
    )
}
