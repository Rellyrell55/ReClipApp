import React from 'react'
import styled from 'styled-components'

import Text from '../components/Text'


export default MessagesScreen = () => {
    return (
        <Container>
            <Header>
                <HeaderText>
                    <Text title bold center> Messages </Text>
                </HeaderText>
            </Header>
            <MessagesContainer>
                

            </MessagesContainer>
        </Container>
    )
}

const Container = styled.View``

const Header = styled.View`
    margin-top: -25px
    height: 150px 
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    background-color: #FF9F1C
`
const HeaderText = styled.View`
    margin-top: 95px
`
const MessagesContainer = styled.View``




