import React from 'react'
import {Text,Image,View, StyleSheet,FlatList} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { WP } from '../Utils/utils'

const DATA = [
  {
    id: '1',
    name: 'niriali',
    date: 'Dec 11, 2021',
    img:'require(../Asset/img1.png)',
    description:'Beautiful quality. Was a hit when I put it in a long little box like real ones as a gift!',
    icon:'../Asset/img1.png',
    link:'Set of 6 Felt Macarons cat Toy'
  },
  {
    id: '2',
    name: 'niriali',
    date: 'Dec 11, 2021',
    img:'require(../Asset/img1.png)',
    description:'Beautiful quality. Was a hit when I put it in a long little box like real ones as a gift!',
    icon:'../Asset/img1.png',
    link:'Set of 6 Felt Macarons cat Toy'
  },
  {
    id: '3',
    name: 'niriali',
    date: 'Dec 11, 2021',
    img:'require(../Asset/img1.png)',
    description:'Beautiful quality. Was a hit when I put it in a long little box like real ones as a gift!',
    icon:'../Asset/img1.png',
    link:'Set of 6 Felt Macarons cat Toy'
  },
];

export default function Reviews() {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../Asset/img1.png')}
        />
          <View style={{marginLeft:10}}>
             <Text style={styles.avatarName}>{item.name}</Text>
             <Text style={styles.avatarDate}>{item.date}</Text>
          </View>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <View style={styles.mainReview}>
      <Image
        style={styles.Logo}
        source={require('../Asset/img1.png')}
      />
      <View style={{marginLeft:10}}>
        <Text style={styles.icon}>PetsPettostore</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="star" style={styles.icon}/>
            <FontAwesome name="star" style={styles.icon}/>
            <FontAwesome name="star" style={styles.icon}/>
            <FontAwesome name="star" style={styles.icon}/>
            <FontAwesome name="star" style={styles.icon}/>
          </View>
          <Text style={{...styles.icon,marginLeft:20}}>25 reviews</Text>
        </View>
      </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:"black",
    flex:1,
    paddingHorizontal:20
  },
  mainReview:{
    flexDirection:'row',
    marginTop:10,
    borderBottomColor:'grey',
    borderWidth:0.6,
    paddingBottom:15,
  },
  iconContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    fontSize:12,
    color:'#fff',
    marginLeft:3
  },
  Logo:{
    width:WP(10),
    height:WP(10),
    borderRadius:5,
    resizeMode:'contain'
  },
  iconHeading:{
    color:'#fff',
    fontSize:10
  },
  avatarContainer:{
    flexDirection:'row',
    marginTop:12
  },
  avatar:{
    width:WP(12),
    height:WP(12),
    borderRadius:24,
    resizeMode:'cover'
  },
  avatarName:{
    color:'#fff',
    fontSize:13,
    marginBottom:-2
  },
  avatarDate:{
    color:'grey',
    fontSize:12,
    fontWeight:'600'
  },
})