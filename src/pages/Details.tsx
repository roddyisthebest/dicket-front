import React, { useEffect } from 'react'
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
    `

const Title = styled.span`
    font-size: 50px;
    line-height: 100px;
    vertical-align: middle;
    padding-left: 10px;
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

const Table = styled.table`
    width: 30%;
`

export default function Details() {
    const info = [{ img: "#", name: "아이다", place: "블루스퀘어", date: "05.05", seat: "A열 2번" }];

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <div>
            <Container>
                <img src="#" alt="#">이미지</img>
                <Container>
                    <Title>뮤지컬</Title>
                </Container>
                <Detail>
                    {info.map(info => (
                        <Block
                            to='#'
                            img={info.img}
                            name={info.name}
                            place={info.place}
                            date={info.date}
                            seat={info.seat}
                        />
                    ))}
                </Detail>
                <RoundButton>수정하기</RoundButton>
            </Container>
            <Table>
                <tbody>
                    <tr>
                        <td><p>예약현황</p></td>
                        <td><p>29/30</p></td>
                        <hr></hr>
                    </tr>
                    <tr>
                        <td><p>남은 좌석 수</p></td>
                        <td><p>1/30</p></td>
                        <hr></hr>
                    </tr>
                    <tr>
                        <td><p>예약자 명단</p></td>
                        <hr></hr>
                    </tr>
                    <tr>
                        <td><p>지갑 주소</p></td>
                        <td><p>좌석</p></td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}
