import React from "react";
import { View, Image, Text,  TouchableOpacity, StyleSheet } from "react-native";

function Custom({navigation}) {
    return (
        <>
            
            <View style={styles.container}>
           
            <Image
                    source={require('../assets/suhu.jpg')}
                    style={{height:480,width:400}}
                
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={()=>navigation.navigate('Weather') }
                >
                    <Text style={styles.buttonText}>오늘의 날씨 확인하러가기</Text>
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
        backgroundColor: 'yellow',
        borderRadius: 5,
        padding:10,
        margin:20
    },
    buttonText: {
        fontSize:20,
        color:'black'
    },
    
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb'
    }

        
})


export default Custom;