import Rect from "react";
import { Button, ScrollView, View, StyleSheet } from "react-native";
import  constants  from "expo-constants";

const App = () => {
  return (
      <>
          <View style={{paddingTop: constants.statusBarHeight}}>
          <View style={[styles.container, styles.playingSpace]}>
      
          </View>
          <ScrollView style={[styles.container]}>
            <View style={[styles.controlSpace]}> 
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE FLEX DIRECTION"/> 
              </View> 
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE JUSTIFY CONTENT"/>>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE ALIGAN ITEMS"/>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE DIRECTION"/>>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE FLEX WRAP"/>>
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="ADD SQUARE"/>>
              </View>
      </View>
      </ScrollView>
    </>
  );
}


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