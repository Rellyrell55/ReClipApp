import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import CameraScreen from '../screens/CameraScreen'
//import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'

export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator()

    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: '#222222',
            paddingBottom: 12
        }
    }

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName ='ios-home'

            switch(route.name){
                case 'Home':
                    iconName = 'ios-home'
                    break
                case 'Messages':
                    iconName = 'ios-chatboxes'
                    break
                case 'Profile':
                    iconName = 'ios-person'
                    break
                default:
                    iconName = 'ios-home'
            }
            if (route.name === 'Camera'){
                return <Ionicons 
                    name='ios-camera' 
                    size={46} 
                    color={focused ? '#FFBF69': '#FF9F1C'}
                    style={{
                        shadowColor: '#FFBF69',
                        shadowOffset: {width:0, height: 10},
                        shadowRadius: 10,
                        shadowOpacity: 0.3
                        

                    }}
                />
            }

            return <Ionicons name={iconName} size={24} color={focused ? '#ffffff': '#GGGGGG'} />
        },
    })

    return(
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name='Profile' component={ProfileScreen}/>
            <MainStack.Screen name='Camera' component={CameraScreen} />
            <MainStack.Screen name='Messages' component={MessagesScreen}/>
        </MainStack.Navigator>
    )
}