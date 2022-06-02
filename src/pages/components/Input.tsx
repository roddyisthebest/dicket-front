import styled from '@emotion/styled'
import React from 'react'
import { GureumGothicSpan } from '../../font/Fonts'

const Container = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:32px;
`

const InfoName = styled(GureumGothicSpan)`
    font-size: 24px;
    flex:3;
`

const InfoContent = styled(GureumGothicSpan)`
    font-size: 24px;
    flex:7;
`
const InputContent = styled.input`
    font-size: 24px;
    flex:7;
    height:100%;
    align-self: flex-end;
`

interface InputProp {
    name: string;
}

export default function Input({ name }: InputProp) {
    return (
        <Container>
            <InfoName>
                {name}
            </InfoName>
            <InputContent />
            {/* <InfoContent>
                {typeof content === 'string' ? content : content.map(value => <div
                    key={value}>{value}</div>)}
            </InfoContent> */}
        </Container>)
}
