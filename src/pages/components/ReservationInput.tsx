import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { InitialStateProp } from '../../slice'
import { sum } from '../../util'
import Info from './Info'
import SeatInput from './SeatInput'



const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:40px;
`

interface ReservationInputProps {
    setPopUp: Function;
}

export default function ReservationInput({ setPopUp }: ReservationInputProps) {
    // const [seatMode, setSeatMode] = useState(false)
    const seatMode = false;
    const { price, seatClassesInfo } = useSelector((state: InitialStateProp) => ({
        price: state.reservationInfo.price,
        seatClassesInfo: state.reservationInfo.priceList
    }))
    // console.log(seatClassesInfo.map(aClass => aClass.seatNumbers))
    return (
        <Container>
            {seatMode ? <>

            </> :
                <>
                    <Info
                        name='공연 날짜'
                        content='2022.05.10'
                    />
                    <Info
                        name='시간'
                        content='17:00 ~ 22:40'
                    />
                    <Info
                        name='잔여 좌석 수'
                        // content='10개'
                        content={`${sum(seatClassesInfo.map(a => a.seatNumbers.length))}`}
                    />
                    <SeatInput setPopUp={setPopUp} />
                    <Info
                        name='가격'
                        content={`${price}`}
                    />
                </>
            }

        </Container>
    )
}
