import styled from '@emotion/styled'
import React from 'react'
import { GureumGothicSpan, JunbotdaeSpan } from '../../font/Fonts'


const Container = styled.div`

`

const SubInformationHeader = styled.div`
    border-bottom: 3px solid black;
    padding:30px;

        /* background-color:blue; */
`

const SubInformationHeaderText = styled(JunbotdaeSpan)`
    font-size:40px;
`

const SubInformationContent = styled.div`
    padding:40px;
`

const Text = styled(GureumGothicSpan)`
    font-size: 24px;
`

interface SubInformationProps {
    menus: Array<string>;
    content: Array<string>;
}

export default function SubInformation({ menus, content }: SubInformationProps) {
    return (
        <Container>
            <SubInformationHeader>
                {menus.map(menu =>
                    <SubInformationHeaderText key={menu}>
                        {menu}
                    </SubInformationHeaderText>
                )}

            </SubInformationHeader>
            <SubInformationContent>
                <Text>
                    {content[0]}
                </Text>
            </SubInformationContent>
        </Container>)
}
