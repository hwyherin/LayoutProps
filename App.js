import React, { useState } from "react";
import { Image, Text, Button, ScrollView, View, StyleSheet } from "react-native";
import  constants  from "expo-constants";


const App = () => {
  const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];

  const justifyContents = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
  ];

  const [flexDirectionIndex, setflexDirection] = useState(0);
  const [justifyContentIndex, setJustifyContent] = useState(0);
  const [alignItemsIndex, setAlignItems] = useState(0);
  const [DirectionIndex, setDirection] =  useState(0);
  const [flexWrapIndex, setflexWrap] = useState(0);
  
  const hookedStyles = {
      flexDirection:flexDirections[flexDirectionIndex],
      justifyContent:justifyContents[justifyContentIndex],
  }
  const changeSetting = (value, options, setterfuction) => {
    if (value == options.length -1) {
      setterfuction(0);
    } else {
          setterfuction(value +1);
    };

    console.log(options[value]);
  }

  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    };
    return <View style={sqStyle} />;
  };

  const [Squares, setSquares] = useState([Square(),Square(),Square()]);

  return(
      <>
      
          <View style={{paddingTop: constants.statusBarHeight}}>
          <View style={[styles.container, styles.playingSpace, hookedStyles]}>
              {Squares.map(elem => elem)}
          </View>
          </View>
          <ScrollView style={[styles.container]}>
            <View style={[styles.controlSpace]}> 
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE FLEX DIRECTION"
                    onPress={() => {
                      console.log("press CHANGE FLEX DIRECTION");
                      changeSetting(flexDirectionIndex, flexDirections, setflexDirection) ;
                      
                    }}
               /> 
            </View> 
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE JUSTIFY CONTENT"
                  onPress={() => {
                    console.log("press CHANGE JUSTIFY CONTENT");
                    changeSetting(justifyContentIndex, justifyContents, setJustifyContent) ;
                    
                    }
                  }
                  />
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE ALIGN ITEMS"
                  onPress={() => {
                    console.log("press CHANGE ALIGN ITEMS");
                    changeSetting(alignItemsIndex, alignItemss, setAlignItems) ;
                  }}
                  />
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE DIRECTION"
                  onPress={() => {
                    console.log("press CHANGE DIRECTION");
                    changeSetting(DirectionIndex, Directions, setDirection) ;
                   
                  }}
                  />
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="CHANGE FLEX WRAP"
                  onPress={() => {
                    console.log("press CHANGE FLEX WRAP");
                    changeSetting(flexWrapIndex, flexWrapcontents, setflexWrap);
                    
                  }}
                  />
              </View>
              <View style={[styles.buttonView]}> 
                  <Button title="ADD SQUARE"
                  onPress={() => {
                    console.log("press ADD SQUARE");
                
                  }}
                  />
              </View>
            <View style={[styles.buttonView]}> 
                <Button title="DELETE SQUARE"
                  onPress={() => {
                    console.log("press DELETE SQUARE");
                
                  }}
                  />    
          </View>
      </View>
      </ScrollView>
      
    </>
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

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
}

export default App;
