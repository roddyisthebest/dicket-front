import styled from '@emotion/styled';
import React from 'react';

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

const Input = styled.input`
  flex: 7;
  font-size: 40px;
`;

type EditInputProp = {
  name: string;
  placeholder: string;
  setData: Function;
  data: string;
};

export default function EditInput({
  name,
  data,
  placeholder,
  setData,
}: EditInputProp) {
  return (
    <Container>
      <Name>{name}</Name>
      <Input
        placeholder={placeholder}
        onChange={(event: any) => {
          setData(event.target.value);
        }}
        value={data}
      ></Input>
    </Container>
  );
}
