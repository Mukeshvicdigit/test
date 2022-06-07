import React, { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"


const CustComp = ({ Title, BtnTitle }) => {

    const [click, setClick] = useState('Mukesh')

    const onClickHandler = () => {
        setClick('Clicked')
        setTimeout(() => {
            setClick('Mukesh')
        }, 1000);
    }
    return (
        <View>
            <Text style={{ fontSize: 30, fontWeight: 600, textAlign: 'center' }}>{click}</Text>
            <Text style={styles.text_2} >{Title}</Text>
            <Button
                title={BtnTitle}
                color='#841584'
                onPress={onClickHandler}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    text_2: {
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: '#f08c00',
        paddingRight: '2rem',
        paddingLeft: '2rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        borderRadius: '10px',
        margin: '1rem'
    },
    btn: {
        marginTop: 50,
        backgroundColor: '#111',
        paddingTop: '2rem'
    }
})

export default CustComp;


