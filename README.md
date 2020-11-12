# README

# ReClip! App
Live Demo: https://superchat-b1dee.web.app/


> ReClip is an app were users and see the reaction of to pictures sent to other users once they have opened the picture 

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)


## General info

ReClip Allows users to see the reaction to some of their funniest meme/moments 

## Technologies

- React Native 
- Firebase
- Firestore 
- HTML - version 5
- CSS - version 3 

## Setup

Clone this repo and use the command `expo start` to launch the server. Once the server you can use the emulator for desktop. 
If you want to use the camera you can download the expo app then scan the QR code to launch it on a device. 

## Code Examples

React.JS  

```
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

```

## Features

- Creates user and adds to the database using email  
- Sign In and Sign Out
- Users once signed in can access the main screen stack
- Within the main stack users can see their messages profile, and access the camera and send pictures


## Status

Project is: Not all the way finshed still need to get photos to other users. Hard coded to show the concept

## Contact

Created by [Terrell Cooper](https://www.linkedin.com/in/terrell-cooper-43252aaa/) Feel free to reach out if you have any questions or just want to chat! 

Slack: @Terrell Cooper

LinkedIn: https://www.linkedin.com/in/terrell-cooper-43252aaa/
