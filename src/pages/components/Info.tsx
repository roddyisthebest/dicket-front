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
export type PriceListProps = {
    class: string,
    price: string
}

interface InfoProps {
    name: string;
    content: string | Array<PriceListProps>;
}

export default function Info({ name, content }: InfoProps) {
    return (
        <Container>
            <InfoName>
                {name}
            </InfoName>
            <InfoContent>
                {typeof content === 'string' ? content : content.map(value => <div
                    key={value.class + value.price}>{value.class} - {value.price}</div>)}
            </InfoContent>
        </Container>
    )
}
