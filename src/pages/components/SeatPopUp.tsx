import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Button } from './MainComponents'
import { ImCross } from 'react-icons/im'
import { GureumGothicSpan } from '../../font/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateProp, setReservationInfo } from '../../slice'

const Container = styled.div`
    height:638px;
    /* width:463px; */
    width:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
`

const CloseContainer = styled.div`
margin:30px;
margin-bottom:0px;

`

const ImageContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

const SelectContainer = styled.div`
    display:flex;
    justify-content:center;
    gap:20px;
`

const Dummy = styled.div`
    flex:1;
`
const Selector = styled.select`
    flex:1;
    font-size:24px;
`

const Text = styled(GureumGothicSpan)`
    font-size:24px;
    flex:1;

`

const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
`

const ChooseButton = styled(Button)`
    
`

interface SeatPopUpProps {
    setPopUp: Function;
    seatImage: any
}

export default function SeatPopUp({ setPopUp, seatImage }: SeatPopUpProps) {
    const dispatch = useDispatch()
    const [seat, setSeat] = useState('가열 1번')

    const { price, concertPriceList } = useSelector((state: InitialStateProp) => ({
        price: state.reservationInfo.price,
        concertPriceList: state.reservationInfo.priceList
    }))
    console.log(concertPriceList)
    const handleClose = () => {
        setPopUp(false)
    }
    const handleSeatValue = (event: any) => {
        const value: string = event.target.value
        console.log(value)
        console.log(typeof value)

        setSeat(value)
        dispatch(setReservationInfo({
            price: concertPriceList.filter(a => value.includes(a.class))[0].price
        }))
    }

    const handleClick = (event: any) => {
        event.preventDefault()
        dispatch(setReservationInfo({
            seat
        }))
        setPopUp(false)
    }
    return (
        <Container>
            <CloseContainer>
                <ImCross
                    size='40px'
                    onClick={() => {
                        handleClose()
                    }}
                />
            </CloseContainer>
            <ImageContainer>
                <img
                    alt='#'
                    // src="../../images/Seats.png"
                    src={seatImage}
                />
            </ImageContainer>
            <SelectContainer>
                <Dummy />
                <Selector
                    value={seat}
                    onChange={handleSeatValue}
                >
                    {concertPriceList.map(aClass =>
                        aClass.seatNumbers.map(n =>
                            // console.log(n)
                            <option key={`${aClass.class} ${n}번`} value={`${aClass.class} ${n}번`}>{aClass.class} {n}번</option>
                        )
                    )}
                </Selector>
                {/* <Text>77,000원</Text> */}
                <Text>{price}</Text>
                <Dummy />
            </SelectContainer>
            <ButtonContainer>
                <ChooseButton
                    onClick={(event: any) => { handleClick(event) }}
                >
                    좌석선택
                </ChooseButton>
            </ButtonContainer>
        </Container>
    )
}
