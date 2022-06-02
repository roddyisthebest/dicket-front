import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: 2px solid black;
`;

const Name = styled.div`
  flex: 3;
  font-size: 40px;
`;

const InputsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 20px;
`;
const InputContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  /* justify-content:center; */
  align-items: center;
  gap: 20px;
`;

const SubName = styled.div`
  font-size: 32px;
`;

const Input = styled.input`
  font-size: 32px;
  width: 140px;
`;

const AddButton = styled.button`
  box-sizing: border-box;
  padding: 0;
  font-size: 32px;
  width: 140px;
`;

const column = (data: { seat: string; money: string; amount: string }[]) => {
  return (
    <>
      {data.map((e, idx) => (
        <InputsContainer style={{ marginTop: 10 }} key={idx}>
          <InputContainer>
            <Input value={e.seat} readOnly />
          </InputContainer>
          <InputContainer>
            <Input value={e.money} readOnly />
          </InputContainer>
          <InputContainer>
            <Input value={e.amount} readOnly />
          </InputContainer>
          <InputContainer>
            <AddButton>삭제</AddButton>
          </InputContainer>
        </InputsContainer>
      ))}
    </>
  );
};

export default function EditPriceInput({ setEdit }: { setEdit: Function }) {
  const [seat, setSeat] = useState<string>('');
  const [money, setMoney] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [data, setData] = useState<
    { seat: string; money: string; amount: string }[]
  >([]);

  useEffect(() => {
    setEdit(data);
  }, [data]);

  const deleteData = (num: number) => {
    setData(data.filter((a, idx) => idx !== num));
  };

  const addData = () => {
    setData([...data, { seat, money, amount }]);
    setSeat('');
    setMoney('');
    setAmount('');
  };

  return (
    <Container>
      <Name>공연 날짜</Name>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <InputsContainer>
          <InputContainer>
            <SubName>좌석 종류</SubName>
            <Input
              value={seat}
              onChange={(event: any) => {
                setSeat(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <SubName>가격</SubName>
            <Input
              value={money}
              onChange={(event: any) => {
                setMoney(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <SubName>개수</SubName>
            <Input
              value={amount}
              onChange={(event: any) => {
                setAmount(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <SubName>Nothing</SubName>
            <AddButton onClick={addData}>추가</AddButton>
          </InputContainer>
        </InputsContainer>
        <>
          {data.map((e, idx) => (
            <InputsContainer style={{ marginTop: 10 }} key={idx}>
              <InputContainer>
                <Input value={e.seat} />
              </InputContainer>
              <InputContainer>
                <Input value={e.money} />
              </InputContainer>
              <InputContainer>
                <Input value={e.amount} />
              </InputContainer>
              <InputContainer>
                <AddButton
                  onClick={() => {
                    deleteData(idx);
                  }}
                >
                  삭제
                </AddButton>
              </InputContainer>
            </InputsContainer>
          ))}
        </>
      </div>
    </Container>
  );
}
