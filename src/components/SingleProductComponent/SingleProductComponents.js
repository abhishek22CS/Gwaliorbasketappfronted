import React,{useEffect, useState} from "react";
import {Text,View,Image,Dimensions,ImageBackground, TouchableOpacity} from 'react-native';
import { ServerURL,getData } from "../../services/ServerServices";
import { useNavigation } from "@react-navigation/native";
import styles from "./singleProCss"
import PlusMinusComponent from "../PlusMinusComponenet";
const {width, height} = Dimensions.get('window');
import { useDispatch } from "react-redux";

export default function SingleProductComponent({data,setRefresh,refresh})
{    
      var navigation=useNavigation()
      var dispatch=useDispatch()

      const handleQtyChange=(value,product)=>{
        if(value==0)
        {
          product['qty']=value
          dispatch({type:"DELETE_CART",payload:[product.listproductid,product]})
          
        }
        else
        {
          product['qty']=value
          dispatch({type:"ADD_CART",payload:[product.listproductid,product]})
         
        }
        setRefresh(!refresh)
      }

    return(<View >
        <View style={styles.mainView}>
        <ImageBackground style={styles.backGround}
        imageStyle={{ borderRadius: 10}}
    source={require('../../../assets/bk.png')}>
       
       <TouchableOpacity onPress={()=>navigation.navigate("SelectedProduct",{product:data})}>
        <Image style={styles.image} source={{uri:`${ServerURL}/images/${data.image}`}}/>
        
        <Text style={styles.nameWeight}> {data.productname} {data.weight} {data.pricetype}</Text>
        
        <View style={styles.priceView}>
        <Text style={styles.actualPrice}>&#8377;{data.price}</Text>
        <Text style={styles.offerPrice}>&#8377;{data.offerprice}</Text>
        <Text style={styles.save}>You Save &#8377;{data.price-data.offerprice}</Text>
        </View>

        </TouchableOpacity>

      <View style={styles.button}>
      
       <PlusMinusComponent data={data} setRefresh={setRefresh} refresh={refresh} onChange={(value)=>handleQtyChange(value,data)}/>
       </View>
        
        </ImageBackground>
        </View>
        </View>
    )
}