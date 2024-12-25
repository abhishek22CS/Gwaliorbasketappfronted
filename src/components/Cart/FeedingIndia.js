import React from "react";
import { View, Text,} from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./FeedingIndiaCss";
import { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import Colors from "../../../assets/Colors";

export default function FeedingIndia(props) {
    const [isSelected, setSelection] = useState(false);
     
    const handleClick=()=>{
        var d=0
        if(!isSelected)
        props.setDonation(d+1)
        else
        props.setDonation(d+0)
    }

    return (
        <View style={styles.Container}>
            <View>
                <Icons name={"food"} size={26} />
            </View>
            <View style={styles.text}>
                
               <Text style={styles.heading}>Feeding India Donation</Text>
               <Text style={{width:260}}>{"Working towards a malnutrition free India.Feeding India is a initiate to give donation to the NGO's basically help in Working for malnution free india".substring(0,60)+"..."} <Text style={{color:Colors.darkGreen}}>read more</Text> </Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.heading2}>&#8377;1</Text>
       <CheckBox value={isSelected} onChange={handleClick} onValueChange={setSelection}/>
            </View>
        </View>
    )
}

