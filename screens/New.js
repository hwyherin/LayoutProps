import React from "react";
import { View, Image, Text, Button, TouchableOpacity, StyleSheet,Linking,LinkText } from "react-native";

function Home({navigation}) {
    return (
        <>
            
            <View style={styles.container}>
            <Text style={styles.temptitile}>
                º아침이 밝았습니다º
            </Text>
            <Image
                    source={require('../assets/goodmorning.jpg')}
                    style={{height:400,width:400}}
                
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={()=>navigation.navigate('Weather') }
                >
                    <Text style={styles.buttonText}>기온 확인하고 하루 시작하기</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={()=>navigation.navigate('Weather') }
                >
                    <Text style={styles.buttonText}>오늘 날씨에 어울리는 옷차림은?</Text>
                </TouchableOpacity>
            </View>
            

        

        </>
    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,

    },
    buttonContainer: {
        backgroundColor: 'gray',
        borderRadius: 5,
        padding:10,
        margin:20
    },
    buttonText: {
        fontSize:20,
        color:'#fff'
    },
    
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb'
    },
    temptitile : {
        fontSize : 25
    }

        
})


export default Home;