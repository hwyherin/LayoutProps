import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout';
import Weather from '../screens/Weather';
import Custom from '../screens/Custom';
import New from '../screens/New';

const Nav =createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>        
            <Nav.Navigator 
                initialRouteName='Home'
            >
                <Nav.Screen 
                    name = "Layout"
                    component={Layout}
                    options={{ title: 'layout Screen'}}
                />

                <Nav.Screen 
                    name = "Home"
                    component={Home}
                    options={{ title: 'home Screen'}}
                />
                <Nav.Screen 
                    name = "Weather"
                    component={Weather}
                    options={{ title: 'weather Screen'}}
                /> 

                <Nav.Screen 
                    name = "Custom"
                    component={Custom}
                    options={{ title: 'Custom'}}
                />
                <Nav.Screen 
                    name = "New"
                    component={New}
                    options={{ title: 'New Screen'}}
                />

            </Nav.Navigator>
        </NavigationContainer>
    )
}
export default MainTabNavigator
