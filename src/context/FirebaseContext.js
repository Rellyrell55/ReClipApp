import React, { createContext } from 'react'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import config from '../config/firebase'

const Context = createContext()

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

const db = firebase.firestore()


const Firebase = {}

const  FireBaseProvider = (props) => {
    return <Context.Provider value={Firebase}>{props.children}</Context.Provider>
}

export default FireBaseProvider