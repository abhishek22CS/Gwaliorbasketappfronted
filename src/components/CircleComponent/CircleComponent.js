import React, { useState } from "react";
import {Text,View,ScrollView,Image, TouchableOpacity} from 'react-native';
import { ServerURL} from "../../services/ServerServices";
import styles from "./CircleCompCss"
import { useNavigation } from "@react-navigation/native";

export default function CircleComponent({heading,categories})
{
    // var category = [
    //     {
    //       id: 1,
    //       icon: "Deo & Perfumes.png",
    //      categoryname: "Deo & Perfumes",
    //       qty: "140 g",
    //       offerprice: " 40",
    //       actualprice: " 47"
    //     },
    //     {
    //       id: 2,
    //       icon: "tea & coffee.png",
    //      categoryname: "tea & coffee",
    //       qty: "10 kg",
    //       offerprice: " 650",
    //       actualprice: " 497",
    //     },
    //     {
    //       id: 3,
    //       icon: "Dairy, Bread & Eggs.png",
    //       categoryname: "Dairy Products",
    //       qty: "1 L",
    //       offerprice: "100",
    //       actualprice: "120",
    //     },
    //     {
    //       id: 4,
    //       icon: "munchies.png",
    //      categoryname: "munchies",
    //       qty: "100 g",
    //       offerprice: "80",
    //       actualprice: "100",
    //     },
    //     {
    //       id: 5,
    //       icon: "babycare.png",
    //      categoryname: "babycare",
    //       qty: "250 g",
    //       offerprice: "30",
    //       actualprice: "40",
    //     },
    //     {
    //         id: 6,
    //         icon: "colddrinks.png",
    //         categoryname: "cold drinks",
    //         qty: "140 g",
    //         offerprice: " 40",
    //         actualprice: " 47",
    //       },
    //       {
    //         id: 7,
    //         icon: "bath&body.png",
    //        categoryname: "bath & body",
    //         qty: "10 kg",
    //         offerprice: " 650",
    //         actualprice: " 497",
    //       },
    //       {
    //         id: 8,
    //         icon: "menscare.png",
    //        categoryname: "menscare",
    //         qty: "1 L",
    //         offerprice: "100",
    //         actualprice: "120",
    //       },
    //       {
    //         id: 9,
    //         icon: "makeup.png",
    //        categoryname: "makeup & Beauties",
    //         qty: "100 g",
    //         offerprice: "80",
    //         actualprice: "100",
    //       },
    //       {
    //         id: 10,
    //         icon: "fitness.png",
    //        categoryname: "fitness frek",
    //         qty: "250 g",
    //         offerprice: "30",
    //         actualprice: "40",
    //       },
    //   ];
     

      var color=['#e67e22','#16a085','#81ecec','#a29bfe','#ffeaa7','#fab1a0','#ff7979','#badc58']
      const [refresh,setRefresh]=useState(false)

      var navigation=useNavigation()

      const handleClick=(item)=>{
        setRefresh(!refresh)
          navigation.navigate('Product',{categoryid:item.categoryid,categoryname:item.categoryname})
      }

      const showCategory=()=>{
        return  categories.map((item)=>{
        return( <View style={styles.viewCenter}>
          <TouchableOpacity onPress={()=>handleClick(item)}>
             <View style={{margin:4,width:90,height:90,borderRadius:45,backgroundColor:color[parseInt(Math.random()*color.length-1)],justifyContent:'center',alignItems:'center'}}>
               <Image style={styles.imageStyle}
                   source={{uri:`${ServerURL}/images/${item.icon}`}}/>
            </View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.categoryName}>{item.categoryname}</Text>
                </TouchableOpacity>
        </View>)
    })
      }
  


    return(<View>
         <Text  style={styles.heading}>{heading}</Text>
         <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        {showCategory()}
        </ScrollView>
        </View>
        </View>
    )
}