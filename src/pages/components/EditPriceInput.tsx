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
  const [type, setType] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [max, setMax] = useState<string>('');
  const [data, setData] = useState<
    { type: string; price: number; max: number }[]
  >([]);

  useEffect(() => {
    setEdit(data);
  }, [data]);

  const deleteData = (num: number) => {
    setData(data.filter((a, idx) => idx !== num));
  };

  const addData = () => {
    setData([
      ...data,
      { type, price: parseInt(price, 10), max: parseInt(max, 10) },
    ]);
    setType('');
    setPrice('');
    setMax('');
  };

  return (
    <Container>
      <Name>공연 날짜</Name>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <InputsContainer>
          <InputContainer>
            <SubName>좌석 종류</SubName>
            <Input
              value={type}
              onChange={(event: any) => {
                setType(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <SubName>가격</SubName>
            <Input
              value={price}
              onChange={(event: any) => {
                setPrice(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <SubName>개수</SubName>
            <Input
              value={max}
              onChange={(event: any) => {
                setMax(event.target.value);
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
                <Input value={e.type} />
              </InputContainer>
              <InputContainer>
                <Input value={e.price} />
              </InputContainer>
              <InputContainer>
                <Input value={e.max} />
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
