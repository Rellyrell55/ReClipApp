import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Loading Screen</Text>
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