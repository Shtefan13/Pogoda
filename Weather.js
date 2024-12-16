import React from "react";
import propTypes from "prop-types";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning-rainy',
        gradient: ['#557c93', '#08203e'],
        header: 'Гроза',
        subheader: 'На улицу лучше не выходить',
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#12cff3', '#5ab2f7'],
        header: 'Морось',
        subheader: 'На улице противно',
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#9bafd9', '#103783'],
        header: 'Дождь',
        subheader: 'На улице мокро',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#c6f8ff', '#595cff'],
        header: 'Снег',
        subheader: 'Самое лучшее время года',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#f7f779', '#fbd07c'],
        header: 'Ясно',
        subheader: 'Отличная погода',
    },
    Clouds: {
        iconName: 'cloud',
        gradient: ['#557c93', '#0974f1'],
        header: 'Облачно',
        subheader: 'Солнца больше нет',
    },
    Mist: {
        iconName: 'weather-windy',
        gradient: ['#557c93', '#0974f1'],
        header: 'Туман',
        subheader: 'Ничего не видно',
    },
    Smoke: {
        iconName:'smoke-detector-outline',
        gradient: ['#9fccfa', '#0974f1'],
        header: 'Дым',
        subheader: 'Накурили',
    },
    Haze: {
        iconName:'cloud-outline',
        gradient: ['#557c93', '#0974f1'],
        header: 'Лёгкий туман',
        subheader: 'Плохая видимость',
    },
    Dust: {
        iconName:'tailwind',
        gradient: ['#ebf4f5', '#b5c6e0'],
        header: 'Пыль',
        subheader: 'На улице не очень',
    },
    Fog: {
        iconName:'weather-windy',
        gradient: ['#ebf4f5', '#b5c6e0'],
        header: 'Сильный туман',
        subheader: 'Не выходить!',
    },
    Sand: {
        iconName:'weather-windy',
        gradient: ['#557c93', '#0974f1'],
        header: 'Песок',
        subheader: '',
    },
    Ash: {
        iconName:'weather-windy',
        gradient: ['#557c93', '#0974f1'],
        header: 'Эш',
        subheader: '',
    },
    Squall: {
        iconName:'weather-windy',
        gradient: ['#557c93', '#0974f1'],
        header: 'Сквирл',
        subheader: '',
    },
    Tornado: {
        iconName:'weather-windy',
        gradient: ['#557c93', '#0974f1'],
        header: 'Торнадо',
        subheader: '',
    }
}

export default function Weather({temp, condition}) {
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <View style = {styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />

                    <Text style = {styles.temp}>{temp}°</Text>
                </View>
                <View style = {{...styles.halfContainer, ...styles.halfContainerr}}>
                    <Text style = {styles.header}>{weatherOptions[condition].header}</Text>
                    <Text style = {styles.subheader}>{weatherOptions[condition].subheader}</Text>
                </View>
                <StatusBar
                    barStyle='light-content'
                />
            </LinearGradient>
           
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    header: {
        fontSize: 32,
        color: 'white',
        fontWeight: '300',
        marginBottom: '10',
    },
    subheader: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    halfContainerr: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
})