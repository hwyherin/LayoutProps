import Rect from "react";
import { Image, Text, Button, ScrollView, View, StyleSheet } from "react-native";
import  constants  from "expo-constants";
import React from "react";

const App = () => {
  return (
    //교수님 교수님께서 알려주신 대로 <>와 </>을 사용했을때 코드 전반에 빨간 밑줄이 보여
    //구글링 해서 React.Fragment로 바꾸어 보았습니다. 
    //그래도 여전히 13번째 줄에 오류가 뜨는데 이거 어떻게 해결해야할까요.
    <React.Fragment>
      
          <View style={{paddingTop: constants.statusBarHeight}}>
          <View style={[styles.container, styles.playingSpace]}>
          <Text> Hello </Text>
          <Text> Hello </Text>
          <Text> Hello </Text>
          <Text> 
              대중음악 딴따라라 폄하, 대표적인 차별 문제
              미국 밥딜런은 노벨상도..우리는 왜 차별하나?
              대중문화도 문화예술, 시대에 맞게 포함시켜야
              면제가 아니라 국위선양을 위한 대체복무방식
              전문연구요원 병역특례처럼 공정기준 마련 可
              정치권은 공론장 여는 역할, 국민여론에 따라.. 
            </Text>
              <Image style={{
                 width : 300,
                height : 300,
                resizeMode: 'contain'
              }}
              source={{uri : 'https://reactnative.dev/img/tiny_logo.png',}}
              />
          </View>
          <ScrollView style={[styles.container]}>
            <View style={[styles.controlSpace]}> 
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE FLEX DIRECTION"/> 
              </View> 
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE JUSTIFY CONTENT"/>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE ALIGAN ITEMS"/>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE DIRECTION"/>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE FLEX WRAP"/>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="ADD SQUARE"/>
              </View>
      </View>
      </ScrollView>
  </React.Fragment>
);
};



const styles = StyleSheet.create({
  container: {
    height: '50%', 
  },
  playingSpace: { 
    backgroundColor: 'white', 
    borderColor: 'blue', 
    borderWidth: 3,
},
  controlSpace: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    backgroundColor: '#F5F5F5', 
  },
  buttonView: { 
    width:'50%', 
    padding: 10, 
  }
  
})

export default App;
