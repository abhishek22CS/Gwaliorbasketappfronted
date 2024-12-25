import { ScrollView,Text, View, Image, TouchableOpacity, } from "react-native";
import { ServerURL } from "../../services/ServerServices";
import Colors from "../../../assets/Colors";
import { useState,useEffect } from "react";

export default function ImageComponent({images}) {
    // console.log("yyyyy",images)
    const [img, setImg] = useState()
    const [clr, setClr] = useState()

    useEffect(function(){
        defImg() 
    },[images])

    const defImg=()=>{
        setImg(images[0])
        setClr(i=0)
       }

    const smallImages =()=>{
        return images.map((item,i)=>{
        return(
            <TouchableOpacity onPress={()=>{setImg(item) ,setClr(i)}}>
            <View style={{marginHorizontal:12,marginVertical:14,borderWidth:(clr == i)?.91:0,borderColor:(clr == i)?Colors.blue:Colors.grey}}>
                <Image
                style={{ resizeMode: 'contain', width: 75, height: 75 }}
                source={{ uri: `${ServerURL}/images/${item}` }}
            />
            </View>
            </TouchableOpacity>
        )})
    }

    return (<View>
        
        <View style={{padding:10,marginVertical:8,alignSelf:'center' }} >
            <Image
                style={{ resizeMode: 'contain', width: 250, height: 250, }}
                source={{ uri: `${ServerURL}/images/${img}` }}
            />
        </View>
       <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {smallImages()}
            </ScrollView>
    </View>

    </View>)
}