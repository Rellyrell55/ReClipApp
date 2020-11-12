
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'

import Text from '../components/Text'

import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'



export default SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const firebase = useContext(FirebaseContext)
    const [_, setUser] = useContext(UserContext)

    const signIn = async () => { 
        setLoading (true)

        try {
            await firebase.signIn(email, password)

            const uid = firebase.getCurrentUser().uid

            const userInfo = await firebase.getUserInfo(uid)

            setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid,
                profilePhotoUrl: userInfo.profilePhotoUrl,
                isLoggedIn: true
            })
        }catch(error){
            alert(error.message)
        }finally{
            setLoading(false)
        }
        
    }
    
    return(
        <Container>
            <UserContainer>
            <Main>
                <Text title semi center>
                    Welcome Back.
                </Text>
            </Main>
            <Auth>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField 
                    autoCapitalize='none' 
                    autoCompleteType='email'
                    autoCorrect={false}
                    //autoFocus={true}
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
            <SignInContainer onPress={signIn} disable={loading}>
                {loading ? (
                    <Loading/>
                ):(
                <Text bold center color='#ffffff'>
                    Sign in
                </Text>
                )}
            </SignInContainer>
            <SignUp onPress={() => navigation.navigate('SignUp')}>
                <Text small center >
                    New to ReClip?{' '}
                    <Text bold color='#FF9F1C'>
                        Sign Up
                    </Text>
                </Text>
            </SignUp>
            </UserContainer>
            <HeaderGraphic>
                <RightCircle/>
                <LeftCircle/>
                <LottieView 
                    source={require('../../assets/lf30_editor_kouk4zzz.json')}
                    autoPlay={'once'}
                    loop={false}
                    style={{
                        width: "75%", 
                        marginTop: 0,
                        marginLeft: 25
                    }}
                />
            </HeaderGraphic>
            <StatusBar barStyle='light-content'/>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #ffffff
`

const Main = styled.View`
    margin-top: 192px;
`
const UserContainer = styled.View`
    margin-top: 125px
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
const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #FF9F1C;
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
    top: 30px;
    z-index: -100;
`

const RightCircle = styled.View`
    background-color: #FF9F1C;
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 250px;
    right: -40px;
    top: -235px;`

const LeftCircle = styled.View`
    background-color: #ffffff;
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    left: 50px;
    top: -50px;
`
const StatusBar = styled.StatusBar``

