// import styled from "@emotion/styled"
import styled from "styled-components"
import EthereumImage from '../../images/ethereum.png'

import { Junbotdae } from '../../font/Fonts'

export const RightContainer = styled.div`
    padding-top:10px;
    display: flex;
    /* background-color:yellow; */
    justify-content: center;
    align-items: center;
    flex:1;
`
export const LeftContainer = styled.div`
    display: flex;
    /* background-color:blue; */
    justify-content: center;
    /* align-items: center; */
    flex:1;
`

export const LoginContainer = styled.div`
    border : 5px solid black;
    border-radius: 44px;
    width: 375px;
    height: 500px;
    display:flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    
`
export const Title = styled(Junbotdae)`
    font-size: 50px;
    padding:40px 0;
`

export const Input = styled.input`
    /* position: relative; */
    font-size: large;
    border:5px solid black;
    padding-left:10px;
    top:40px;
    border-radius:31px;
    width: 254px;
    height:62px;
    margin-bottom: 10px;
    background-color: white;
`
export const EmailInput = styled(Input).attrs({
    type: "email",
    placeholder: "이메일을 입력해주세요"
})`

`
export const PasswordInput = styled(Input).attrs({
    type: "password",
    placeholder: "비밀번호를 입력해주세요"
})`

`

export const Button = styled.button`
    /* outline:5px solid black; */
    font-family: junbotdae;
    font-size: 30px;
    border: 5px solid black;
    background-color: black;
    padding:0px;
    color: white;
    border-radius:31px;
    width: 284px;
    height:72px;
    margin-bottom: 10px;
`
export const NextButton = styled(Button)`

    
`
export const ChangeButton = styled.span`
     font-family: junbotdae;
   
`
export const BannerContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    left:-30px;
    top:100px;

`

export const BannerTitle = styled.div`
     font-family: junbotdae;
    font-size: 40px;
    margin-bottom: 40px;
`

export const ImageEthereum = styled.img.attrs({
    src: EthereumImage
})`

`
