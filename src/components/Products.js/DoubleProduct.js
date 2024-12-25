import React, { useState } from "react";
import {Text,View,Image,Dimensions,ImageBackground, TouchableOpacity,FlatList} from 'react-native';
import { ServerURL } from "../../services/ServerServices";
import styles from './DoubleProductCss'
import PlusMinusComponent from "../PlusMinusComponenet";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function DoubleProduct({products,categoryName,setRefresh,refresh}){

  var dispatch=useDispatch()
  var navigation=useNavigation()

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


const SingleProduct=({data})=>{
    return(<View >
        <View style={styles.mainView}>
        <ImageBackground style={styles.backGround}
        imageStyle={{ borderRadius: 10}}
    source={require('../../../assets/bk2.png')}>
       
       <TouchableOpacity onPress={()=>navigation.navigate("SelectedProduct",{product:data})}>
        <Image style={styles.image} source={{uri:`${ServerURL}/images/${data.image}`}}/>
        
        <Text style={styles.nameWeight}> {data.productname} {data.weight} {data.pricetype}</Text>
        
        <View style={styles.priceView}>
        <Text style={styles.actualPrice}>&#8377;{data.price}</Text>
        <Text style={styles.offerPrice}>&#8377;{data.offerprice}</Text>
        <Text style={styles.save}>You Save &#8377;{data.price-data.offerprice}</Text>
        </View>

        </TouchableOpacity>

          <View style={{marginTop:5}}>
          <PlusMinusComponent data={data} setRefresh={setRefresh} refresh={refresh} onChange={(value)=>handleQtyChange(value,data)}/>
                    </View>

        
        </ImageBackground>
        </View>
        </View>
    )
}

const Item = ({data}) =>{
    return(<View >
       <SingleProduct data={data}/>
        </View>
    )

 }
 

return(
    <View>
 <Text style={styles.titleStyle}>{categoryName} ({products.length}) Items</Text>  
         <FlatList
    data={products}
    numColumns={2}
    scrollEnabled
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <Item data={item} />}
    keyExtractor={item => item.id}
      />

    </View>
)






}