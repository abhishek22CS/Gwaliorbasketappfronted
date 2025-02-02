import React, {useState, useEffect, useSyncExternalStore} from 'react';
import {Image, Dimensions, View} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

export default function AppHeader(props) {
  var navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#dcdde1',
          display: 'flex',
          width: width,
          height: height * 0.06,
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
        }}>
        <MCI
          name="menu"
          size={24}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Image
          style={{resizeMode: 'contain', width: 90, height: 80}}
          source={require('../../assets/logo.png')}
        />
        <MCI name="account" size={24} style={{marginRight:5}} />
      </View>
    </View>
  );
}


