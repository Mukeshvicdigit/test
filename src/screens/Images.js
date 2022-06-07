import { StyleSheet, View, Text, Image, Button } from 'react-native'
import React from 'react'

const Images = () => {
    return (
        <View style={styles.center}>
            <Image source={require("../../assets/lambo1.jpg")}
                style={styles.imageStyle}
            />
            <Text>Lamborghini Avantador 5000hp ms</Text>
            <Button
                title='Add To Card'
                style={styles.btn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100',
        fontSize: 50
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 200,
    },
    btn: {
        marginTop: 50,

    }
})
export default Images