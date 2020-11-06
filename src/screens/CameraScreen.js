import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default CameraScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Camera Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(203, 243, 240)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
