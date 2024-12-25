import { View,Text, TouchableOpacity } from "react-native";

const Button=({title,height,width,bgColor,foreColor,onPress=()=>{}})=>{
   return(
    <TouchableOpacity onPress={onPress}>
    <View style={{padding:5,backgroundColor:bgColor,height:height,width:width,alignItems:'center',borderRadius:7}}>
     <Text  style={{fontSize:18,fontWeight:'bold',color:foreColor}}>{title}</Text>
    </View>
    </TouchableOpacity>
   )
}

export default Button