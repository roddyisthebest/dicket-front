import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Titles = styled.div`
    flex:1;
    /* width: 100%; */
    font-weight: bold;
`

const Table = styled.table`
    width: 100%;
`

const Box = styled.div`
    width: 50%;
`

const ImageContianer = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`

const MainImage = styled.img`
    border-radius:23px;
    height:134px;
    width:97px;
    border: 5px solid black;
    margin: 10px;
`

const Details = styled.div`
    flex:1;
    /* width: 100%; */
`

export interface BlockProps {
    // navigation: NavigateFunction;
    to: string;
    img: string;
    name: string;
    place: string;
    date: string;
    seat: string;
}
export default function Block({ to, img, name, place, date, seat }: BlockProps) {
    const navigation = useNavigate();
    return (
        <Box>
            <Table
                onClick={() => {
                    navigation(to)
                }}
            >
                <tbody>
                    <tr>
                        <td>
                            <ImageContianer>
                                <MainImage
                                    src={img}
                                />
                            </ImageContianer>
                        </td>
                        <td>
                            <Titles>
                                <p>티켓<br></br>장소<br></br>예약날짜<br></br>예약좌석</p>
                            </Titles>
                        </td>
                        <td>
                            <Details>
                                <p>{name}<br></br>{place}<br></br>{date}<br></br>{seat}</p>
                            </Details>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Box>
    )
}

