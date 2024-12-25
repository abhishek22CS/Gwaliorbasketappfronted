import React from "react";
import { ServerURL } from "../services/ServerServices";
import { Image, View,Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";


export default function Banner(){

    var images=[
        {uri:`${ServerURL}/images/${'d1.jpg'}`},
        {uri:`${ServerURL}/images/${'d2.jpg'}`},
        {uri:`${ServerURL}/images/${'d3.jpg'}`},
        {uri:`${ServerURL}/images/${'d4.jpg'}`},
        {uri:`${ServerURL}/images/${'d5.jpg'}`},
        {uri:`${ServerURL}/images/${'d6.jpg'}`},
        {uri:`${ServerURL}/images/${'d7.jpg'}`},
        {uri:`${ServerURL}/images/${'d8.jpg'}`},
        {uri:`${ServerURL}/images/${'d9.jpg'}`},
        {uri:`${ServerURL}/images/${'d10.jpg'}`},
        ]

    return(<View>
        <View style={{marginVertical:10,marginHorizontal:7}}>
            
        

        <SliderBox images={images} sliderBoxHeight={190} dotStyle={{width:0}} parentWidth={380} autoplay={true} autoplayInterval={5000} circleLoop={true}/>

       </View>
       </View>
   )
}