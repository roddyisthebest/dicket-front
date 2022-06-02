import styled from '@emotion/styled'
import React from 'react'

import { QRCodeSVG } from 'qrcode.react';
import { useNavigate, useParams } from 'react-router-dom'
import { GureumGothic } from '../font/Fonts'
import Info from './components/Info'
import { Button } from './components/MainComponents';

const Container = styled.div`   
    display:flex;
    flex-direction: column;
`

const Header = styled(GureumGothic)`   
    font-size:50px;
    display:flex;
    justify-content: center;
    margin-top:40px;
`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: row;
`

const QRCodeContainer = styled.div`
    flex:1;
    display:flex;
    justify-content: center;
    align-self: center;
`

const ReservedInfoContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    margin:40px;
`

const Text = styled.span`
`

const ButtonsInfoContainer = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:40px;
`

// const Button = styled(Button)``

export default function ReservedDetail() {
    const param = useParams()
    const navigation = useNavigate()
    console.log(param)
    const link = 'https://www.naver.com/'

    const dummy = {
        email: 'test@naver.com',
        name: '뮤지컬 아이다',
        date: '2022.05.14',
        time: '17:00 ~ 22:40',
        location: '블루스퀘어 신한카드홀',
        seat: 'A열 9번',
        price: '50,000'
    }

    return (
        <Container>
            <Header>
                <Text>
                    예약완료
                </Text>
            </Header>
            <InfoContainer>
                <QRCodeContainer>
                    <QRCodeSVG
                        style={{
                            flex: 1,
                            height: `300px`,
                        }}
                        value={link} />,

                </QRCodeContainer>
                <ReservedInfoContainer>
                    < Info name='이메일' content={dummy.email} />
                    < Info name='제목' content={dummy.name} />
                    < Info name='날짜' content={dummy.date} />
                    < Info name='시간' content={dummy.time} />
                    < Info name='장소' content={dummy.location} />
                    < Info name='좌석' content={dummy.seat} />
                    < Info name='가격' content={dummy.price} />
                </ReservedInfoContainer>
            </InfoContainer>
            <ButtonsInfoContainer>
                <Button
                    onClick={() => {
                        navigation('/')
                    }}
                >
                    홈으로
                </Button>
                <Button
                    onClick={() => {
                        navigation('/mypage')
                    }}
                >
                    마이페이지로
                </Button>
            </ButtonsInfoContainer>
        </Container>
    )
}
