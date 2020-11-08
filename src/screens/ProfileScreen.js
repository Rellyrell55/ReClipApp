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
    align-items: center;
    margin-top: 64px;
    flex: 1;
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
`

const Logout = styled.TouchableOpacity`
    margin: 0 32px;
    width: 126px
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px
`