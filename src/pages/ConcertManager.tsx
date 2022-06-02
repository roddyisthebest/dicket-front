import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Junbotdae } from '../font/Fonts'

const Container = styled(Junbotdae)`
    font-family: junbotdae;
    font-size: 30px;
    display: flex;
    height: 500px;
    border-bottom: solid 5px black;
    flex-direction:row;
`
const ContentContainer = styled(Junbotdae)`
    width: 50%;
    font-family: junbotdae;
    font-size: 30px;
    display: flex;
    height: 100px;
    flex-direction:column;
`
const Titles = styled.div`
width: 100%;
font-weight: bold;
`
const Content = styled.div`
    width: 100%;
`
const Title = styled.span`
font-size: 50px;
vertical-align: middle;
padding-left: 10px;

`
const Line = styled.div`
border-bottom: solid 5px black;
margin-right: 20px;
height: 100%;
`
const Detail = styled.div`
    height: 70%;
`
const Box = styled.div`
`
const Bottom = styled.div`
`
function Block({ img, name, place, date, seat, price }: any) {
    return (
        <Box>
            <Table>
                <tbody>
                    <tr>
                        <td>
                            <Titles>
                                <p>장소<br></br>공연기간<br></br>공연시간<br></br>관람연령<br></br>가격</p>
                            </Titles>
                        </td>
                        <td>
                            <Content>
                                <p>{name}<br></br>{place}<br></br>{date}<br></br>{seat}<br></br>{price}</p>
                            </Content>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Box>
    )
}
const Table = styled.table`
    width: 100%;
`
const RoundButton = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    width: 30%;
    font-size: 20px;
    float: right;
`
const ImageContianer = styled.div`
    width: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const MainImage = styled.img`
    border-radius:23px;
    height:291px;
    width:211px;
    border: 5px solid black;
`
const ButtonDiv = styled.div`
    height: 10%;
`
const LineBox = styled.div`
    width: 100%;
    border-bottom: 5px solid gray;
`
const NoneLineBox = styled.div`
    width: 100%;
`
const Item = styled.div`
    width: 30%;
    height: 40px;
    vertical-align: middle;
    display: table-cell;
`

export default function ConcertManager() {
    const navigation = useNavigate()
    const info = [{ img: "https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg", name: "블루스퀘어", place: "2022.05.10", date: "160분", seat: "8세 이상 관람가능", price: [50000, 40000, 30000] }];
    return (
        <div>
            <Container>
                <ImageContianer>
                    <MainImage
                        src="https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg"
                    />
                </ImageContianer>
                <ContentContainer>
                    <Line><Title>뮤지컬 아이다</Title></Line>
                    <Detail>
                        {info.map(info => (
                            <Block
                                name={info.name}
                                place={info.place}
                                date={info.date}
                                seat={info.seat}
                                price={info.price}
                            />
                        ))}
                    </Detail>
                    <ButtonDiv>
                        <RoundButton
                            onClick={() => {
                                navigation('/edit')
                            }}
                        >수정하기
                        </RoundButton>
                    </ButtonDiv>
                </ContentContainer>
            </Container>
            <Bottom>
                <LineBox>
                    <Table>
                        <tr>
                            <td width="25%"><Item>예약현황</Item></td>
                            <td><Item>29/30</Item></td>
                        </tr>
                    </Table>
                </LineBox>
                <LineBox>
                    <Table>
                        <tr>
                            <td width="25%"><Item>남은 좌석 수</Item></td>
                            <td><Item>1/30</Item></td>
                        </tr>
                    </Table>
                </LineBox>
                <LineBox>
                    <Table>
                        <tr>
                            <td width="25%"><Item>예약자 명단</Item></td>
                            <td width="25%"><Item>2022.05.14</Item></td>
                            <td><Item>17:00~22:40</Item></td>
                        </tr>
                    </Table>
                </LineBox>
                <NoneLineBox>
                    <Table>
                        <tr>
                            <td width="25%"><Item>지갑 주소</Item></td>
                            <td><Item>좌석</Item></td>
                        </tr>
                    </Table>
                </NoneLineBox>
                <NoneLineBox>
                    <Table>
                        <tbody>
                            <tr>
                                <td width="25%"><Item>0x983h3897d3</Item></td>
                                <td><Item>가열 2번</Item></td>
                            </tr>
                            <tr>
                                <td width="25%"><Item>0x983h3897d3</Item></td>
                                <td><Item>가열 2번</Item></td>
                            </tr>
                            <tr>
                                <td width="25%"><Item>0x983h3897d3</Item></td>
                                <td><Item>가열 2번</Item></td>
                            </tr>
                        </tbody>
                    </Table>
                </NoneLineBox>
            </Bottom>

        </div>
    )
}