import React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import styles from './DeliveryCss';
import { useSelector } from 'react-redux';
import Colors from '../../../assets/Colors';

export default function Delivery() {

    
   var cart=useSelector((state)=>state.cart) 
   var keys=Object.keys(cart)


    return (<View style={styles.Container}>
       
            <View>
                <MCI name={"alarm"} color={Colors.darkGreen} size={32} />
            </View >
            <View >
                <Text style={styles.title}>Delivery Items In 15 Minutes.</Text>
                {keys.length>1?<Text style={{fontSize:20}}>{keys.length} Items</Text>:<Text style={{fontSize:20}}>{keys.length} Item</Text>}
            </View>
            </View>
       
    )
}

