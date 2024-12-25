import { View, Text, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./BillDetailsCss"
import { useSelector } from "react-redux";
import { Divider } from 'react-native-paper';
import { useState } from "react";

   
export default function BillDetails(props) {
    var cart=useSelector((state)=>state.cart) 
    var product=Object.values(cart)
    var keys=Object.keys(cart)
   

    var actualTotal=product.reduce((p1,p2)=>{
        return p1+p2.price*p2.qty
  
      },0)
      var offerTotal=product.reduce((p1,p2)=>{
        return p1+p2.offerprice*p2.qty
  
      },0)

      var netAmount=props.donation&&props.tip?offerTotal+15+props.donation+props.tip:props.donation?offerTotal+15+props.donation:props.tip?offerTotal+15+props.tip:offerTotal+15
     props.setTotalAmt(netAmount)

    return (
        <SafeAreaView style={styles.Container}>

            <Text style={styles.heading}>Bill Details</Text>

            <View style={styles.Content}>
                <View style={styles.icontxt}>
                    <MCI name={"cash-register"} style={styles.iconstyling} />
                    <Text style={styles.txt}>Sum Total</Text>
                    <View style={styles.save}>
                        <Text style={styles.gttxt} >Saved &#8377;{actualTotal-offerTotal}</Text>
                    </View>
                </View>
                <View style={styles.rowCenter}  >
                    <Text style={styles.price}>&#8377;{actualTotal}</Text>
                    <Text style={styles.price2}>&#8377;{offerTotal}</Text>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.icontxt}>
                    <MCI name={"moped"} style={styles.iconstyling} />
                    <Text style={styles.txt}>Delivery Charge</Text>
                </View>
                <View>
                    <Text style={styles.price2}>&#8377;15</Text>
                </View>
            </View>
           {keys.length>0 && props.tip?<View style={styles.Content}>
                <View style={styles.icontxt}>
                <Icon name={"coins"}  style={styles.iconstyling} />
                    <Text style={styles.txt}>Delivery Tip</Text>
                </View>
                <View>
                    <Text style={styles.price3}>+ &#8377;{props.tip}</Text>
                </View>
            </View>:<></>}
            
           
            <Divider bold style={{width:'98%',marginVertical:5}}/>
            
            <View style={styles.Content}>
                <View >
                    <Text style={styles.grandTotal}>Grand Total</Text>
                </View>
                <View style={styles.rowCenter}  >
                {keys.length>0?<Text style={styles.gtprice}>&#8377;{netAmount}</Text>:<Text style={styles.gtprice}>&#8377;0</Text>}
                   
                </View>
            </View>

            <Divider bold style={{width:'98%',marginVertical:6}}/>


        </SafeAreaView>
    )
}

