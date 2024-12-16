import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (<View style={styles.container}>
        <Text style={styles.text}>Получение погоды ...</Text>
        <StatusBar barStyle="dark-content"/>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#5CD1FF"
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
    },
})