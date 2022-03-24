import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function About() {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>About</Text>
      <View style={styles.linkMain}>
        <Text  style={styles.linkHeading}>Related links</Text>
        <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} >
          <MaterialIcons name="keyboard-arrow-right" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.secondHeading}>Shop Policies</Text>
      <View style={styles.linkMain}>
        <Text  style={styles.linkHeading}>Shipping</Text>
        <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} >
        <MaterialIcons name="keyboard-arrow-right" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.linkMain}>
        <Text  style={styles.linkHeading}>Returns and exchanges</Text>
        <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} >
        <MaterialIcons name="keyboard-arrow-right" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.linkMain}>
        <Text  style={styles.linkHeading}>Payment methods</Text>
        <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 50, right: 50}} >
        <MaterialIcons name="keyboard-arrow-right" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.date} >Last updated on Jan 29, 2021</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:"black",
    flex:1,
    paddingHorizontal:20
  },
  heading:{
    color:'#fff',
    fontSize:16,
    fontWeight:'700',
    borderBottomColor:'lightgrey',
    borderWidth:0.5,
    paddingBottom:15,
    paddingTop:10
  },
  secondHeading:{
    color:'#fff',
    fontSize:16,
    fontWeight:'700',
    paddingBottom:15,
    paddingTop:25
  },
  linkMain:{
    flexDirection:'row',
    borderBottomColor:'grey',
    borderWidth:0.6,
    paddingBottom:12,
    paddingTop:12,
    justifyContent:"space-between",
    alignItems:'center'
  },
  linkHeading:{
    color:'#fff',
    fontSize:13.5,
    fontWeight:'600',
  },
  icon:{
    color:'#fff',
    fontSize:19,
    fontWeight:'600',
  },
  date:{
    color:'grey',
    fontSize:11,
    paddingTop:10,
    fontWeight:'600'
  }
})