import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import EditInput from './components/EditInput';
import EditDateTimeInput from './components/EditDateTimeInput';
import EditPriceInput from './components/EditPriceInput';
import EditMainImageInput from './components/EditMainImageInput';
import EditAgeInput from './components/EditAgeInput';
import EditSeatImageInput from './components/EditSeatImageInput';
import { Button } from './components/MainComponents';
import { useNavigate } from 'react-router-dom';

import { mintAnimalTokenContract, web3 } from '../contracts';

import { concerts } from '../api';
import { useSelector } from 'react-redux';
import { InitialStateProp } from '../slice';

const Container = styled.div``;

const Header = styled.div`
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-bottom: 3px solid black;
`;

const Text = styled.span``;

const EditContainer = styled.div``;

const ButtonsContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

export default function Edit() {
  const navigation = useNavigate();

  //   title,
  //   location,
  //   date,
  //   startTime,
  //   endTime,
  //   age,
  //   max,
  //   concertImg,
  //   seatImg,
  //   seatInfo,
  //   tokenIds,
  const [title, setTitle] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [startTime, setStartTime] = useState<number>();
  const [endTime, setEndTime] = useState<number>();
  const [age, setAge] = useState<number>();
  const [max, setMax] = useState<number>(0);
  const [concertImg, setConcertImg] = useState<string>('');
  const [seatImg, setSeatImg] = useState<string>('');
  const [seatInfo, setSeatInfo] = useState<
    { seat: string; money: string; amount: string }[]
  >([]);
  const [tokenIds, setTokenIds] = useState<number[]>();

  const [seatFile, setSeatFile] = useState<File>();
  const [concertFile, setConcertFile] = useState<File>();

  const { account } = useSelector((state: InitialStateProp) => ({
    account: state.authState.address,
  }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enroll = async () => {
    try {
      var maxx = 0;
      seatInfo.map((e) => {
        maxx += parseInt(e.amount, 10);
      });
      // console.log(
      //   title,
      //   location,
      //   date,
      //   startTime,
      //   endTime,
      //   age,
      //   maxx,
      //   seatInfo,
      //   seatFile,
      //   concertFile
      // );
      const response = await mintAnimalTokenContract.methods
        .mintTicketToken(maxx)
        .send({
          from: account,
          value: web3.utils.toWei('0.00000052', 'ether'),
        });

      console.log(response);
      // const {data} = await = concerts.saveConcert();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Header>
        <Text>콘서트 등록 및 수정</Text>
      </Header>
      <EditContainer>
        <EditInput
          name={'이름'}
          data={title}
          placeholder="이름 입력"
          setData={setTitle}
        />
        <EditInput
          name="장소"
          data={location}
          setData={setLocation}
          placeholder="장소 입력"
        />
        <EditDateTimeInput
          setDate={setDate}
          setEnd={setEndTime}
          setStart={setStartTime}
        />
        <EditAgeInput setData={setAge} />
        <EditPriceInput setEdit={setSeatInfo} />
        <EditMainImageInput setFile={setConcertFile} />
        <EditSeatImageInput setFile={setSeatFile} />
      </EditContainer>
      <ButtonsContainer>
        <Button
          onClick={() => {
            enroll();
          }}
        >
          등록하기
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
