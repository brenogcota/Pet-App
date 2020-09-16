import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from '../src/components/BottomTab';

const Stack = createStackNavigator();


const Routes = () => {
    
    return (
        <Stack.Navigator screenOptions={{
        headerShown: false
        }}
        >
            { 
                /* isLoading && (
                    *  <Stack.Screen name="Loading" component={Loading} />
                    *)
                */
            }

            <Stack.Screen name="Tab" component={Tabs} />
        
        </Stack.Navigator>

    );
}

export default Routes;