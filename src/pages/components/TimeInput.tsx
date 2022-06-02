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
const InputContent = styled.select`
    font-size: 24px;
    flex:7;
    height:100%;
    align-self: flex-end;
`

interface InputProp {
    name: string;
}

export default function TimeInput() {
    return (
        <Container>
            <InfoName>
                시간
            </InfoName>
            <InputContent>
                <option value="0">17:00 ~ 22:40</option>
                <option value="1">18:00 ~ 23:40</option>
                <option value="2">19:00 ~ 24:40</option>
                <option value="3">20:00 ~ 01:40</option>
            </InputContent>
            {/* <InputContent /> */}
            {/* <InfoContent>
                {typeof content === 'string' ? content : content.map(value => <div
                    key={value}>{value}</div>)}
            </InfoContent> */}
        </Container>)
}
