
import React from 'react'
import {Text} from 'react-native'
import TopStack from './src/Component/Stack'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
     <Stack.Navigator>
        <Stack.Screen
          name="Stack"
          options={{ headerShown: false }}
          component={TopStack}
        />
     </Stack.Navigator>
    </NavigationContainer>
  )
}
