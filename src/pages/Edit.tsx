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

const LoadingContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoadingText = styled.span`
  color: black;
  font-size: 50px;
  font-weight: 600;
`;

const SmallText = styled.span`
  color: black;
  font-size: 30px;
  font-weight: 300;
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
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [age, setAge] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [seatInfo, setSeatInfo] = useState<
    { type: string; price: number; max: number }[]
  >([]);

  const [seatFile, setSeatFile] = useState<any>();
  const [concertFile, setConcertFile] = useState<any>();

  const { account } = useSelector((state: InitialStateProp) => ({
    account: state.authState.address,
  }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enroll = async () => {
    try {
      setLoading(true);
      var maxx = 0;
      seatInfo.map((e: { type: String; price: number; max: number }) => {
        maxx += e.max;
      });
      const {
        events: { Transfer },
      } = await mintAnimalTokenContract.methods.mintTicketToken(maxx).send({
        from: account,
        value: web3.utils.toWei('0.00000052', 'ether'),
      });

      const tokenIds: number[] = [];

      Transfer.map((e: any) => {
        tokenIds.push(parseInt(e.returnValues.tokenId, 10));
      });

      const formDataConcert = new FormData();
      formDataConcert.append('img', concertFile);

      const {
        data: { payload: concert_img },
      } = await concerts.saveConcertImg(formDataConcert);

      const formDataSeatImg = new FormData();
      formDataSeatImg.append('img', seatFile);
      const {
        data: { payload: seat_img },
      } = await concerts.saveSeatImg(formDataSeatImg);

      await concerts.saveConcert({
        title,
        location,
        date,
        startTime,
        endTime,
        age,
        max: maxx,
        concertImg: concert_img,
        seatImg: seat_img,
        seatInfo,
        tokenIds,
      });

      alert('성공적으로 등록되었습니다.');
      navigation('/mypage');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <LoadingContainer>
      <LoadingText>nft 티켓 발급 및 콘서트 등록 중 입니다.</LoadingText>
      <SmallText>(빠르게 과정을 수행하시려면 가스를 올려주세요!)</SmallText>
    </LoadingContainer>
  ) : (
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
