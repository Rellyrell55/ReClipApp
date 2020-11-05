
import React, { useState } from 'react'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'

import Text from '../components/Text'
export default SignUpScreen = ({ navigation }) => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    
    
    return(
        <Container>
            <Main>
                <Text title semi center>
                    Sign up to get started.
                </Text>
            </Main>
            <ProfilePhotoContainer>
                <DefaultProfilePhoto>
                    <AntDesign name='plus' size={24} color='#ffffff'/>
                </DefaultProfilePhoto>
            </ProfilePhotoContainer>
            <Auth>
                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    autoFocus={true}
                    onChangeText={username => setUsername(username.trim())}
                    value={email}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField 
                    autoCapitalize='none' 
                    autoCompleteType='email'
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType='email-address'
                    onChangeText={email => setEmail(email.trim())}
                    value={email}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField 
                    autoCapitalize='none' 
                    autoCompleteType='password'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password.trim())}
                    value={password}
                    />
                </AuthContainer>
            </Auth>
            <SignUpContainer disable={loading}>
                {loading ? (
                    <Loading/>
                ):(
                <Text bold center color='#ffffff'>
                    Sign up
                </Text>
                )}
            </SignUpContainer>
            <SignUp onPress={() => navigation.navigate('SignIn')}>
                <Text small center>
                    Already have an account? {''}
                    <Text bold color='#8022d9'>
                        Sign In
                    </Text>
                </Text>
            </SignUp>
            <HeaderGraphic>
                <RightCircle/>
                <LeftCircle/>
            </HeaderGraphic>
            <StatusBar barStyle='light-content'/>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`

const Main = styled.View`
    margin-top: 185px;
`
const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center; 
    margin-top: 16px;
    overflow: hidden;
`

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center; 
    flex: 1;
`

const Auth = styled.View`
    margin: 64px 32px 32px;
`

const AuthContainer = styled.View`
    margin-bottom: 32px;
`

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`
const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px
`
const Loading = styled.ActivityIndicator.attrs(props => ({
    color: '#ffffff',
    size: 'small',
}))``

const SignUp = styled.TouchableOpacity`
    margin-top: 16px; 
`


const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -25px;
    z-index: -100;
`

const RightCircle = styled.View`
    background-color: #8022d9;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;`

const LeftCircle = styled.View`
    background-color: #23a6d5;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`
const StatusBar = styled.StatusBar``

