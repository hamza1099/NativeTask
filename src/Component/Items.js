import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import { WP } from '../Utils/utils';
import { Data } from '../Utils/Data'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Items() {
  const renderItem = ({item}) => {
    return (
      <View style={styles.gridView}>
        <View style={styles.grids}>
          <Image source={item.img} style={styles.gridImage1} />
          <View>
            <Image source={item.img} style={styles.gridImage2} />
            <Image source={item.img} style={styles.gridImage3} />
          </View>
        </View>

        <Text style={styles.textHeading}>{item.heading}</Text>
        <Text style={styles.textDetail}>{item.item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.itemsView}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg',
        }}
        style={styles.headerImage}
      />

      <View style={styles.secondView}>
        <Image
          source={require('../Asset/img1.png')}
          style={styles.displayPicture}
        />

        <View style={styles.headingView}>
          <Text style={styles.textHeading}>PetsPettostore</Text>
          <Text style={styles.textDetail}>Thailand</Text>
          <View style={styles.lastHeadingLine}>
            <Text style={styles.textDetail}>131 Sales</Text>
            <Text style={styles.separator}> | </Text>
            <View style={styles.iconContainer}>
              <FontAwesome name="star" style={styles.icon} />
              <FontAwesome name="star" style={styles.icon} />
              <FontAwesome name="star" style={styles.icon} />
              <FontAwesome name="star" style={styles.icon} />
              <FontAwesome name="star" style={styles.icon} />
            </View>
            <Text style={styles.textDetail}>(25)</Text>
          </View>
        </View>
      </View>

      <Text style={styles.headingOfGrids}>Browse By Section</Text>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemsView: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerImage: {
    width: WP(100),
    height: WP(32),
  },
  secondView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  displayPicture: {
    borderRadius: 10,
    height: WP(20),
    width: WP(20),
  },
  gridImage1: {
    height: WP(40),
    width: WP(20),
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: 5,
  },
  gridImage2: {
    height: WP(19.5),
    width: WP(20),
    borderTopRightRadius: 15,
  },
  gridImage3: {
    height: WP(19.5),
    width: WP(20),
    borderBottomRightRadius: 15,
    marginTop: WP(1),
  },
  grids: {
    padding: 10,
    flexDirection: 'row',
  },
  textHeading: {
    color: 'white',
    fontWeight: '700',
    fontSize: WP(4.5),
  },
  headingOfGrids: {
    paddingLeft: 10,
    color: 'white',
    fontWeight: '700',
    fontSize: WP(5),
  },
  textDetail: {
    color: 'white',
    fontSize: WP(4),
  },
  separator: {
    color: 'grey',
    fontSize: WP(4),
  },
  headingView: {
    paddingLeft: 10,
  },
  gridView: {
    padding: 10,
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 3,
  },
  lastHeadingLine: {
    flexDirection: 'row',
  },
});

