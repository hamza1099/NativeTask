import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { WP } from '../Utils/utils';
import Items from "./Items";
import Reviews from "./Reviews";
import About from "./About";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function Stack({ navigation }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.actionBar}>
     
      <TouchableOpacity
          style={styles.buttonContainer}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
        >
          <MaterialIcons name="keyboard-arrow-left" style={styles.navIcon} />
        </TouchableOpacity>
       
        <Text style={styles.mainHeading}>Shop</Text>
       
       <View style={{display:'flex',flexDirection:"row"}}>
       <TouchableOpacity
          style={{...styles.buttonContainer,paddingRight:15}}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
        >
          <Feather name="upload"  style={styles.Icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
        >
          <Feather name="heart" style={styles.Icon} />
        </TouchableOpacity>
       </View>
        
    
      </View>

      <Tab.Navigator
        initialRouteName="Items"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarIndicatorStyle: {
            backgroundColor: "#fff",
          },
          tabBarLabelStyle: { fontSize: 13, fontWeight: "700" },
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen
          name="Items"
          component={Items}
          options={{ tabBarLabel: "Items" }}
        />
        <Tab.Screen
          name="Reviews"
          component={Reviews}
          options={{ tabBarLabel: "Reviews" }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{ tabBarLabel: "About" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    height: WP(13),
    alignItems: "center",
    paddingHorizontal: 20,
    // marginBottom:10
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainHeading: {
    fontSize: WP(5),
    fontWeight: "bold",
    color: "#fff",
    paddingLeft:15
  },
  logOut: {
    fontSize: WP(4),
    fontWeight: Platform.OS === "ios" ? "0" : "500",
    color: "#fff",
    marginRight: 10,
  },
  Icon: {
    color: "#fff",
    fontSize: WP(4.5),
    fontWeight: "bold",
  },
  navIcon: {
    color: "#fff",
    fontSize: WP(7),
    fontWeight: "bold",
  },
});
