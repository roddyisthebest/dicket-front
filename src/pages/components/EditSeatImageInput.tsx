import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 2px solid black;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.div`
  flex: 3;
  font-size: 40px;
`;

const FileInput = styled.input.attrs({
  type: 'file',
})`
  flex: 7;
  background-color: 'yellow';
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function EditSeatImageInput({ setFile }: { setFile: Function }) {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <Container>
      <Header>
        <Name>콘서트 좌석 사진</Name>
        <FileInput
          name=" "
          onChange={(event: any) => {
            encodeFileToBase64(event.target.files[0]);
            setFile(event.target.files[0]);
          }}
        />
      </Header>
      <ImageContainer>
        <div className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </div>
      </ImageContainer>
    </Container>
  );
}
