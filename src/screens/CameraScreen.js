import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { color } from 'react-native-reanimated';



export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [modalVisible, setModalVisible] = useState(false);

    

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
            return <View />;
        }
        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }

            return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
            setCameraRef(ref) ;
        }}>
            <View
                style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'flex-end'
                }}>
                <TouchableOpacity
                style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    marginBottom: -100,
                    marginRight: 30
                }}
                onPress={() => {
                    setType(
                    type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf: 'center', marginBottom: 25}} onPress={async() => {
                if(cameraRef){
                    let photo = await cameraRef.takePictureAsync();
                }
                setModalVisible(true)

                }}> 
                    <Modal visible={modalVisible}>
                        <View>
                            <View style={{
                                marginTop: -10,
                                height: 150, 
                                borderBottomColor: '#8e93a1',
                                borderBottomWidth: 0.5,
                                backgroundColor: '#FF9F1C',
                            }}>
                                <Text style={{fontSize: 35, marginTop: 80, alignSelf: 'center', justifyContent: 'center'}}>Send To...</Text>
                            </View>
                            <View style={{position: 'fixed' ,borderWidth: 0.5, marginTop:60,height:65, width:390, alignSelf:'center',borderRadius:"20%"}}>

                            </View>
                            <View style={{marginTop:-52, marginLeft:24}}>
                                <Text style={{ fontSize: 30,marginLeft: 10, marginBottom:5}}>Lauren</Text>
                            </View>
                            <View style={{marginTop:113}}>
                                <TouchableOpacity 
                                    onPress={ async() => { setModalVisible(false) }}
                                    style={{
                                        marginTop:-150,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor:'#FF9F1C',
                                        width:50,
                                        height:30,
                                        marginLeft:330,
                                        borderRadius:"20%"
                                    }}>
                                    <Text style={{fontSize: 15}}>></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <View style={{ 
                        borderWidth: 2,
                        borderRadius:"50%",
                        borderColor: 'white',
                        height: 50,
                        width:50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'}}
                    >
                    <View style={{
                        borderWidth: 2,
                        borderRadius:"50%",
                        borderColor: 'white',
                        height: 40,
                        width:40,
                        backgroundColor: 'white'}} >
                    </View>
                    </View>
                </TouchableOpacity>
            </View>
            </Camera>
        </View>
        );
}
