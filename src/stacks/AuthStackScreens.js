import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignInScreen from '../screens/SigninScreen'
import SignUpScreen from '../screens/SignUpScreen'

export default AuthStackScreens = () => {
    const AuthStack = createStackNavigator()
    
    return(
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="sign in" component={SignInScreen}/>
            <AuthStack.Screen name="sign up" component={SignUpScreen}/>
        </AuthStack.Navigator> 
    )
}

