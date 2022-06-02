import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { InitialStateProp, setAddress } from './slice';
import Main from './pages/Main';
import Header from './pages/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import TicketDetail from './pages/TicketDetail';
import ReservedDetail from './pages/ReservedDetail';
import Edit from './pages/Edit';
import MyConcerts from './pages/MyConcerts';
import Details from './pages/Details';
import ConcertManager from './pages/ConcertManager';
import MoreReserved from './pages/MoreReserved';
import Onplus from './pages/Onplus';
import Endplus from './pages/Endplus';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const SideBlank = styled.div`
  flex: 1;
`;
const RoutesContainer = styled.div`
  flex-basis: 1166px;
`;

export const getAccount = async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } else {
      alert('Install Metamask!');
      return '';
    }
  } catch (error) {
    console.log(error);
    return '';
  }
};

export default function App() {
  const { isLogedIn } = useSelector((state: InitialStateProp) => ({
    isLogedIn: state.isLogedIn,
  }));
  const dispatch = useDispatch();

  const { myAddress } = useSelector((state: InitialStateProp) => ({
    myAddress: state.authState.address,
  }));

  useEffect(() => {
    console.log(myAddress);
  }, []);

  useEffect(() => {
    // console.log(myAddress);
    getAccount()
      .then((res) => {
        console.log(res);
        dispatch(setAddress(res));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setAddress(''));
      });
  }, [Routes]);

  return (
    <Container>
      <SideBlank />
      <RoutesContainer>
        <Header />
        {myAddress ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/ticketdetail/*" element={<TicketDetail />} />
            <Route path="/reservedinfo/*" element={<ReservedDetail />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/MyConcerts" element={<MyConcerts />} />
            <Route path="/details" element={<Details />} />
            <Route path="/concertdetail/*" element={<ConcertManager />} />
            <Route path="/morereserved" element={<MoreReserved />} />
            <Route path="/moreOpen" element={<Onplus />} />
            <Route path="/moreClosed" element={<Endplus />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        )}
        {/* <Footer /> */}
      </RoutesContainer>
      <SideBlank />
    </Container>
  );
}
