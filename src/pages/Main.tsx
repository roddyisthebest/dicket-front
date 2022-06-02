import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
  BannerContainer,
  BannerTitle,
  EmailInput,
  ImageEthereum,
  LeftContainer,
  LoginContainer,
  NextButton,
  RightContainer,
  ChangeButton,
  Title,
  PasswordInput,
} from './components/MainComponents';

// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateProp, setLogedIn } from '../slice';
import { authApi } from '../api';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function Main() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigate()
  const { myAddress } = useSelector((state: InitialStateProp) => ({
    myAddress: state.authState.address,
  }));
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    event.preventDefault();
    if (myAddress === '') {
      alert('메타마스크에 로그인을 먼저 하세요');
      return;
    }
    setSignUpMode(!signUpMode);
  };

  const handleEmail = (event: any) => {
    const { value }: { value: string } = event.target;
    setUserId(value);
    console.log(userId);
  };
  const handlePassword = (event: any) => {
    const { value }: { value: string } = event.target;
    setPassword(value);
    console.log(password);
  };

  const handleSignUp = (event: any) => {
    event.preventDefault();
    console.log('회원가입을 했습니다.');
    authApi
      .signUp({ userId, password, address: myAddress })
      .then((res) => {
        console.log('회원가입 성공');
        setSignUpMode(false);
        console.log(res);
      })
      .catch((err) => {
        console.log('회원가입 실패');
        console.log(err);
      });
  };

  const handleSignIn = (event: any) => {
    // event.preventDefault();
    // if (myAddress === '') {
    //   alert('메타마스크에 로그인을 먼저 하세요');
    //   return;
    // }
    console.log('로그인 시도.');
    // dispatch(requestLogin());

    authApi
      .signIn({ userId, password })
      .then((res) => {
        console.log(res);
        console.log('로그인성공');
        dispatch(setLogedIn(true));
      })
      .catch((err) => {
        console.log('로그인 실패');
        console.log(err);
      });
  };

  return (
    <Container>
      <RightContainer>
        {signUpMode ? (
          <LoginContainer>
            <Title>회원가입</Title>
            <EmailInput
              onChange={(event: any) => {
                handleEmail(event);
              }}
            />
            <PasswordInput
              onChange={(event: any) => {
                handlePassword(event);
              }}
            />
            <NextButton
              onClick={(event: any) => {
                handleSignUp(event);
              }}
            >
              Sign Up
            </NextButton>
            <ChangeButton
              onClick={(event: any) => {
                handleClick(event);
              }}
            >
              로그인
            </ChangeButton>
          </LoginContainer>
        ) : (
          <LoginContainer>
            <Title>로그인</Title>
            <EmailInput
              onChange={(event: any) => {
                handleEmail(event);
              }}
            />
            <PasswordInput
              onChange={(event: any) => {
                handlePassword(event);
              }}
            />
            <NextButton
              onClick={(event: any) => {
                handleSignIn(event);
              }}
            >
              Sign In
            </NextButton>
            <ChangeButton
              onClick={(event: any) => {
                handleClick(event);
              }}
            >
              회원가입
            </ChangeButton>
          </LoginContainer>
        )}
      </RightContainer>
      <LeftContainer>
        <BannerContainer>
          <BannerTitle>이젠 Ethereum으로 티케팅하자!</BannerTitle>
          <ImageEthereum />
        </BannerContainer>
      </LeftContainer>
    </Container>
  );
}
