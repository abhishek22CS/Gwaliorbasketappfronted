import React from "react";
import { View, Text,TouchableOpacity} from "react-native"
import styles from "./TipCss";


     export default function Tip(props) {
    
      var tip=0

     const handleTip1=()=>{
        props.setTip(tip+10)
     }
     const handleTip2=()=>{
        props.setTip(tip+25)
     }
     const handleTip3=()=>{
        props.setTip(tip+50)
     }
     const handleTip4=()=>{
        props.setTip(tip+100)
     }
     
     
     return (<View >
        <View style={styles.Container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Tip your delivery partner</Text>
                <Text>Your Kindness means alot 100% of your tip will got directly to your delivery partner.</Text>
            </View>
            <View style={styles.buttonstyling}>
                
                <TouchableOpacity onPress={handleTip1}>
                <View style={styles.buttonOne}>
                    <Text>&#128512; &#8377;10</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleTip2}>
                <View style={styles.buttonOne}>
                    <Text>&#129303; &#8377;25</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleTip3}>
                <View style={styles.buttonOne}>
                    <Text>&#128525; &#8377;50</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleTip4}>
                <View style={styles.buttonOne}>
                    <Text>&#128293;&#8377;100</Text>
                </View>
                </TouchableOpacity>

            </View>            
        </View>
        
    </View>)
}

