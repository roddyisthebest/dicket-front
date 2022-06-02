import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`
const List = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap; 
  margin-top:5%; 
`
const Text = styled.h1`
    font-size: 1em;
    text-align: center;
    width:100%;
    margin: 50px;
    line-height: 90px;
`

const Header = styled.div`   
    font-size:45px;
    display:flex;
    margin-top:40px;
    border-bottom: solid 3px black;
`
const Ticket = styled.div`
    margin: 20px;
    height: 480px;
    width: 348px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

function Endplus() {
  const navigation = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Container>
      <Header>
        <Text>
          예약 종료
        </Text>
      </Header>
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(ticket =>
          <Ticket
            key={ticket}
            onClick={() => { navigation('/ticketdetail/2') }}
          >
            {ticket}
          </Ticket>)}
      </List>
    </Container>
  );
}

export default Endplus;