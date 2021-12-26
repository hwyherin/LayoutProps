import React, { useState } from "react";
import {Image, Text, Button, ScrollView, View , StyleSheet} from "react-native";
import Constants from 'expo-constants';

const Layout = (props) => {
    const {navigation} = props;
    const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];

    const justifyContents = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
    ];

    const directions = ["LTR", "RTL"];
    const alignItems = ['stretch','flex-start','flex-end','center','baseline'];
    const flexWraps = ['wrap', 'nowrap', 'wrap-reverse'];


    const [flexDirectionIndex, setFlexDirection] = useState(0);
    const [justifyContentIndex, setJustifyContent] = useState(0);
    const [alignItemIndex, setAlignItem] = useState(0);
    const [directionIndex, setDirection] = useState(0);
    const [flexWrapIndex, setFlexWrap] = useState(0);

    const hookedStyles = {
        flexDirection:flexDirections[flexDirectionIndex],
        justifyContent:justifyContents[justifyContentIndex],
        alignItems:alignItems[alignItemIndex],
        direction:directions[directionIndex],
        flexWrap:flexWraps[flexWrapIndex],
    }


    

    const changeSetting = (value, options, setterfunction) => {
        if (value == options.length - 1) {
            setterfunction(0);
        } else {
            setterfunction(value + 1);
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

      const [squares, setSquares] = useState([Square(),Square(),Square()]);

    return (
        <>
            <View style={{paddingTop: Constants.statusBarHeight}}/>

            <View style={[styles.container, styles.playingSpace, hookedStyles]}>
                {squares.map(elem => elem)}    
            </View>

            <ScrollView style={[styles.container]}>
                <View style={[styles.controlSpace]}>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX DIRECTION"
                            onPress={() => {
                                    console.log("press CHANGE FLEX DIRECTION");
                                    flexDirections[flexDirectionIndex];
                                    
                                    changeSetting(flexDirectionIndex, flexDirections, setFlexDirection);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE JUSTIFY CONTENT"
                            onPress={() => {
                                    console.log("press CHANGE JUSTIFY CONTENT");
                                    changeSetting(justifyContentIndex, justifyContents, setJustifyContent);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE ALIGN ITEMS"
                            onPress={() => {
                                    console.log("press CHANGE ALIGN ITEMS");
                                    changeSetting(alignItemIndex, alignItems, setAlignItem);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE DIRECTION"
                            onPress={() => {
                                    console.log("press CHANGE DIRECTION");
                                    changeSetting(directionIndex, directions, setDirection);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX WRAP"
                            onPress={() => {
                                    console.log("press CHANGE FLEX WRAP");
                                    changeSetting(flexWrapIndex, flexWraps, setFlexWrap);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="ADD SQUARE"
                            onPress={() => {
                                    console.log("press ADD SQUARE");
                                    setSquares([...squares, Square()]);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="DELET SQUARE"
                            onPress={() => {
                                    console.log("press DELET SQUARE");
                                    setSquares(squares.filter((v, i)  => i != squares.length - 1));
                                }
                                
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="GO TO HOME"
                            onPress={() => {
                                    console.log("press DELET SQUARE");
                                    navigation.navigate('Home')
                                }
                                
                            }
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
    },
    tinyLogo: {
        width: 100,
        height: 100,
      }
})

const randomHexColor = () => {
    
    return '#000000'.replace(/0/g, () => {
        return (~~(Math.random()*16)).toString(16);
    });
    
}


export default Layout;