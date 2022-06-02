import styled from '@emotion/styled'
import DicketImage from "../images/Dicket.png"
import React from 'react'
import { Junbotdae } from '../font/Fonts'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { InitialStateProp } from '../slice'
import { useSelector } from 'react-redux'



const Container = styled(Junbotdae)`
    font-family: junbotdae;
    font-size: 30px;
    display: flex;
    height: 100px;
    border-bottom: solid 5px black;
    flex-direction:row;
    `
const ImageContianer = styled.div`
    flex:1;
    /* background-color:blue; */
    display:flex;
    justify-content: center;
    align-items: center;
`
const Blank = styled.div`
    flex:1;
    /* background-color:red; */
`
const MenuContainer = styled.div`
    display: flex;
    flex:1;
    /* background-color:yellow; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;


`
const Text = styled.span`
    font-size: 32px;

`

export default function Header() {
    const navigation = useNavigate()
    const { isLogedIn } = useSelector((state: InitialStateProp) => ({
        isLogedIn: state.isLogedIn
    }))
    const handleClick = (event: any, to: string) => {
        event.preventDefault();
        if (isLogedIn) { navigation(to) }
    }
    return (
        <Container>
            <ImageContianer>
                <img
                    src={DicketImage}
                    alt='img'
                    style={{
                        position: 'relative',
                        width: 120,
                        height: 71,
                        left: -50,
                    }}
                />
            </ImageContianer>
            <Blank />
            <MenuContainer>
                <Text
                    onClick={(e) => { handleClick(e, '/') }}
                >
                    홈
                </Text>
                <Text
                    onClick={(e) => { handleClick(e, '/mypage') }}
                >

                    마이페이지
                </Text>
            </MenuContainer>
        </Container>
    )
}
