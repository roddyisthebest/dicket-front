import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { GureumGothicSpan } from '../../font/Fonts'
import { InitialStateProp } from '../../slice'

const Container = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:32px;
`

const InfoName = styled(GureumGothicSpan)`
    font-size: 24px;
    flex:3;
`


const InputContentContainer = styled.div`
    font-size: 24px;
    flex:7;
    height:100%;
    align-self: flex-end;
    display:flex;
    flex-direction: row;
    gap:30px;
`
const InputContent = styled.input`
    font-size: 24px;
    box-sizing: border-box;
    flex:1;
    height:100%;
    /* align-self: flex-end; */
`
const SeatButton = styled.button`
    border: 0px;
    font-size: 24px;
    flex:1;
    height:100%;
    /* align-self: flex-end; */
`

interface SeatInputProps {
    setPopUp: Function;
}

export default function SeatInput({ setPopUp }: SeatInputProps) {

    const { seat } = useSelector((state: InitialStateProp) => ({
        seat: state.reservationInfo.seat
    }))
    return (
        <Container>
            <InfoName>
                좌석 선택
            </InfoName>
            <InputContentContainer>
                <InputContent
                    value={seat}
                    disabled
                />
                <SeatButton
                    onClick={() => { setPopUp(true) }}
                >
                    찾기
                </SeatButton>
            </InputContentContainer>

        </Container>)
}
