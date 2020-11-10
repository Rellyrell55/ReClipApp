import React, {useContext} from 'react'
import styled from 'styled-components'

import { UserContext } from '../context/UserContext'
import { FirebaseContext } from '../context/FirebaseContext'


import Text from '../components/Text'

export default ProfileScreen = () => {
    const [user, setUser] = useContext(UserContext)
    const firebase = useContext(FirebaseContext)

    const logOut = async () => { 
        const loggedOut = await firebase.logOut()

        if (loggedOut){
            setUser((state) => ({...state, isLoggedIn: false}))
        }
    }

    return (
        <Container>
            <Header>
                <HeaderText>
                    <Text title bold center> Profile </Text>
                </HeaderText>
            </Header>
            <ProfilePhotoContainer>
                <ProfilePhoto source={user.profilePhotoUrl === 'default' 
                ? require('../../assets/icons8-name-50.png')
                : {uri: user.profilePhotoUrl}} />
            </ProfilePhotoContainer>
            <Text large bold margin='16px 0 32px 0'>
                {user.username}
            </Text>
            <Logout onPress={logOut}>
                <Text medium bold color='#FFFFFF'>Log out</Text>
            </Logout>
        </Container>
    )
}

const Container = styled.View`
    margin-top: 220px;
    flex: 1;
    align-items: center 
`
const ProfilePhotoContainer = styled.View`
    shadow-opacity: 0.8;
    shadow-radius: 30px;
    shadow-color: #222222
`
const ProfilePhoto = styled.Image`
    width: 128px;
    height: 128px;
    border-radius: 64px;
    align-items: center 
    justify-content: center;
    margin-top: 100px;
`

const Logout = styled.TouchableOpacity`
    margin: 0 32px;
    width: 126px
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #FF9F1C;
    border-radius: 6px
    margin-top: 220px;
    
`
const Header = styled.View`
    margin-top: -245px
    height: 150px
    width: 1000px 
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    background-color: #FF9F1C
`
const HeaderText = styled.View`
    margin-top: 95px
`