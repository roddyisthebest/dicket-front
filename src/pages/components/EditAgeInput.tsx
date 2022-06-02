import styled from '@emotion/styled';
import React, { useState } from 'react';

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

const Select = styled.select`
  flex: 7;
  font-size: 40px;
`;

export default function EditAgeInput({ setData }: { setData: Function }) {
  const [rating, setRating] = useState(0);

  return (
    <Container>
      <Name>관람 가능 연령</Name>
      <Select
        value={rating}
        onChange={(event: any) => {
          setRating(event.target.value);
          setData(event.target.value);
        }}
      >
        <option value={0}>전체 관람</option>
        <option value={1}>7세 이상</option>
        <option value={2}>12세 이상</option>
        <option value={3}>15세 이상</option>
        <option value={4}>청소년 관람 불가능</option>
      </Select>
    </Container>
  );
}
