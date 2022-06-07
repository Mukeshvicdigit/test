import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LottieView from 'lottie-react-native';
import moduleName from 'module';

function Lottie() {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/animation.json')}
                autoPlay
                loop
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffec99'
    }
})

export default Lottie