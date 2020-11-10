import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'

import {UserContext} from '../context/UserContext'

import Text from '../components/Text'

const LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext)
    
    useEffect(() => {
        setTimeout(async () => {
            setUser(state => ({...state, isLoggedIn: false}))
        }, 1500)
    }, [])

    return (
        <Container>
            <Text title color='#FFFFFF'>ReClip</Text>
        <LottieView
            source={require('../../assets/lf30_editor_zclugjw7.json')}
            autoPlay
            loop
            style={{width: "50%", marginTop: 24 }}
        />
        </Container> 
    )
}

export default LoadingScreen

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;
`