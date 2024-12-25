import React from "react";
import { View, Text,ScrollView } from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./DeliveryInstructionCss";
import Colors from "../../../assets/Colors";
import CheckBox from '@react-native-community/checkbox';
import { useState } from "react";


export default function DeliveryInstructions() {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);

    const deliveryinstructions = [
        { id: 1, icon: "microphone",color:Colors.darkGreen, topic: 'Record', line: 'Press Here To Hold.' },
        { id: 1, icon: "phone-off", topic:<CheckBox onFillColor={Colors.black} tintColors={{ true:Colors.darkGreen, false: 'black' }} value={isSelected} onValueChange={setSelection}/>, line: "don't calling to much" },
        { id: 1, icon: "bell-off",topic:<CheckBox onFillColor={Colors.black} tintColors={{ true:Colors.darkGreen, false: 'black' }} value={isSelected2} onValueChange={setSelection2}/>, line: "Don't Ring The Bell." },
        { id: 1, icon: "message-bulleted-off",topic:<CheckBox onFillColor={Colors.black} tintColors={{ true:Colors.darkGreen, false: 'black' }} value={isSelected3} onValueChange={setSelection3}/>, line: "Don't to much Message." },
        { id: 1, icon: "truck-delivery",color:Colors.blue, topic:'', line: 'Deliver Item Safely.' },
    ]

    const DeliveryInstructionsScroll = () => {
        return deliveryinstructions.map((item) => {
            return (
                   <View >
                <View style={styles.firstboxrow} >
                    <View style={styles.firstrow} >
                     
                        <Icons name={item.icon} color={item.color} size={28} />
                        <Text style={styles.boxtext}>{item.topic}</Text>
                      

                    </View>
                    <Text style={styles.lastrow}>{item.line}</Text>
                </View>

            </View> 

            )
        })
    }
    return (<View style={styles.container}>
     <Text style={styles.heading}>Delivery Instructions</Text>

        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
            {DeliveryInstructionsScroll()}
        </ScrollView>

    </View>)

}

