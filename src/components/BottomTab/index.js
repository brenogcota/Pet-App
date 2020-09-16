import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Home from '../../screens/Home';
import Petty from '../../screens/PettyPro';
import Location from '../../screens/Location';

import { theme } from '../../styles/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
              icon = focused ? 'pets'  : 'pets'
          } else if (route.name === 'Location') {
            icon = focused ? 'room'  : 'room'
            return (
                <View style={{ backgroundColor: theme.lightDark, width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                    <MIcon name={icon} size={size} color={focused ? theme.purple : '#fff'}/>
                </View> 
            );
          } else if (route.name === 'Petty') {
            icon = focused ? 'payment' : 'payment'
              
          } 


          return <MIcon name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.purple,
        inactiveTintColor: theme.lightDark,
        showLabel: false,
        style: {
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: theme.background,
            bottom: 10,
        }
      }}
    >

    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Location" component={Location} />
    <Tab.Screen name="Petty" component={Petty} />

    </Tab.Navigator>
  );
}

export default Tabs;