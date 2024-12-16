import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading.js'
import Weather from './Weather.js'
import axios from "axios";

const API_KEY = 'd08d131a8ba818503c31e9eb0be89d7e';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) =>{
    const {data: {main: {temp}, weather} } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main,
    });
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error){
      Alert.alert('Невозможно определить местоположение', "Включите геолокацию на устройстве")
    }
    
  }
  
  componentDidMount(){
    this.getLocation();
  }
  
  render () {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading />: <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
  
}

const styles = StyleSheet.create({
  container: {

  },
});
