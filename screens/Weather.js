import React from 'react';
import {Image, Text, Alert, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const apiKey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
    },
    Clouds: {
        iconName: "weather-cloudy",
    },
    Rain: {
        iconName: "weather-rainy"
    },
}

export default class Weather extends React.Component {

    state = {
        cond : "Clear"
    }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
        
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude, location.coords.longitude)
            
            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch(error) {
            Alert.alert("Error", {error})

        }
    }

    getWeather = async(latitude, longitude) => {
        const {data} = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

        );
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        console.log(data.main.feels_like);
        console.log(data.weather[0].main);
        console.log(data.weather[0].icon);
        this.setState({cond:data.weather[0].main, speed:data.wind.speed, humidity:data.main.humidity, feels_like:data.main.feels_like, temp_max:data.main.temp_max, temp:data.main.temp, icon:data.weather[0].icon});
    }


    componentDidMount() {
        this.getLocation();
    }

    
    
    render() {
        const {cond, temp, temp_max, temp_min, feels_like, icon, image,speed,humidity} = this.state;
       
        return (
            <>
                <View style={styles.container}>
                
                    <View style={styles.halfcontainer}>



                        <Text style={styles.temptitile}>오늘의 날씨는</Text>

                        <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={70} color="pink" />

                        <Text style={styles.temptitile}>현재 기온은{temp}℃입니다.</Text>
                        <Text style={styles.temptitile}>체감기온은 기온은{feels_like}℃입니다.</Text>
                        <Text style={styles.temptitile}>현재 풍속은{speed}m/s, 습도는{humidity}%입니다.</Text>


                        
                        <Text> </Text>
                        <Text> </Text>

                
                
                <Image
                        source={require('../assets/haveaniceday.jpg')}
                        style={{height:300,width:450}}
                />
                
                </View>
                </View>
                 
            </>
        );
    }

}


 

        
    
    



const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    },
    halfcontainer : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    },
    
    temptitile : {
        fontSize : 30
    }
})

