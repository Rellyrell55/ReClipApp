import React, { useState }from 'react'
import styled from 'styled-components'

import Text from '../components/Text'

import resivedPicture from '../../assets/IMG_0589.jpeg'
import sentPicture from '../../assets/SentMeme.jpg'
import reactionPicture from '../../assets/IMG_0595.jpeg'

const showReaction = () =>{
    return <Reaction source={sentPicture}/>
}


export default MessagesScreen = () => {
    
    const [reactionVisible, setReactionVisible] = useState(0);

    return (
        <Container>
            <Header>
                <HeaderText>
                    <Text title bold center> Messages </Text>
                </HeaderText>
            </Header>
            <MessagesContainer>
                <ResivedMessage>
                    <ResivedProfilePhoto>
                        <Text center bold medium>L</Text>
                    </ResivedProfilePhoto>
                    <ResivedContent>
                    
                        <MessageImage source={sentPicture}/>
                    </ResivedContent>
                </ResivedMessage>
                <SentMessage>
                    <SentProfilePhoto>
                        <Text center bold medium>R</Text>
                    </SentProfilePhoto>
                    <SentContent>
                        <TextBox>
                            
                        </TextBox>
                        <MessageImage source={resivedPicture}/>
                        <ReactionButton onPress={async() => {setReactionVisible(10)}}>
                            <Text small right heavy color={'#FF9F1C'} style={{marginRight: -5, marginBottom: 10, marginTop: 10}}> Reaction Ready </Text> 
                            <Reaction opacity={reactionVisible} source={reactionPicture}/>
                        </ReactionButton>
                    </SentContent>
                </SentMessage>
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
const MessagesContainer = styled.View`
    margin-top: 32px
    shadow-opacity: 0.6;
    shadow-radius: 15px;
`
const TextBox = styled.View`
    align-items: flex-start
`

const ResivedMessage = styled.View`
    width: 155px
    height: 200px
    align-items: center
    margin-top: 32px
    margin-left: 50px
    border-width: 0.5px
    border-radius: 10px;
`
const SentMessage = styled.View`
    width: 150px
    height: 195px
    align-items: center
    margin-top: 32px
    margin-left: 210px
    border-width: 0.5px
    border-radius: 10px;
`

const MessageImage = styled.Image`
    width: 128px;
    height: 150px;
    border-radius: 12px;
    align-items: center 
    justify-content: center;
    margin-top: 15px;

`

const ReactionButton = styled.TouchableOpacity``

const Reaction = styled.Image`
    margin-top: 15px
    margin-left: 20px
    height: 100px
    width: 100px
`

const ExitButton = styled.TouchableOpacity``

const ResivedProfilePhoto = styled.View`
    background-color: #FFBF69
    width: 35px;
    height: 35px;
    border-radius: 64px;
    align-self: flex-start
    justify-content: center;
    margin-left: -45px
    margin-top: 160px
    
`
const ResivedContent = styled.View`
    margin-top: -190px
`

const SentProfilePhoto = styled.View`
    background-color: #FFBF69
    width: 35px;
    height: 35px;
    border-radius: 64px;
    justify-content: center;
    margin-left: 200px
    margin-top: 150px
    
`

const SentContent = styled.View`
    margin-top: -195px
`



