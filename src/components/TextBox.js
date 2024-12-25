import { useEffect,useState } from "react";
import { View,TextInput,Text } from "react-native";
import Colors from "../../assets/Colors";
import Icons from "react-native-vector-icons/FontAwesome5"

const TextBox=({icon,height,value,placeHolder,width,error,password=false,onChangeText,onPressIn,keyboardType,onFocus=()=>{}})=>{
  const [isFocus,setIsFocus]=useState(false)
  const [viewPassword,setViewPassword]=useState(password)


const handleViewPassword=()=>{
  setViewPassword(!viewPassword)
  
}

    return(
        <View>
    <View onBlur={()=>setIsFocus(false)} onFocus={()=>{onFocus();setIsFocus(true)}} style={{padding:4,height:height,width:width,flexDirection:'row',alignItems:'center',borderRadius:5,borderColor:isFocus?Colors.blue:error?Colors.red:'#b2bec3',borderWidth:1}} >
    <Icons name={icon} style={{fontSize:25,marginRight:10}}/>
    <TextInput value={value}  secureTextEntry={viewPassword?true:false} placeholder={placeHolder} style={{fontSize:16}} onPressIn={onPressIn} onChangeText={onChangeText} keyboardType={keyboardType}  ></TextInput>
    {password?<Icons name={viewPassword?'eye-slash':'eye'} style={{fontSize:20,marginLeft:'auto'}} onPress={handleViewPassword}/>:<></>}
    </View>
    {!error?<></>:<Text style={{margin:3,fontWeight:450,color:Colors.red}}>{error}</Text>}
    </View>
   )
}

export default TextBox