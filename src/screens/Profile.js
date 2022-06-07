import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import CustComp from './CustComp'

const Profile = () => {
    return (
        <View style={styles.center}>
            {/* <View style={{ backgroundColor: 'red', width: '100%', flex: 1 }} /> */}
            <Image source={require('../../assets/lambo1.jpg')} style={styles.img} />
            <Text style={styles.text}>Learning React Native</Text>
            <CustComp Title={'Text Style Props'} BtnTitle={'Add Me'} />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffe066',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    img: {
        height: 200,
        width: 300,
        marginBottom: 30,
    }
})
export default Profile