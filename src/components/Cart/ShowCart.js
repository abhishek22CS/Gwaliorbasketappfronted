import { Text, View,SafeAreaView, Image } from "react-native"
import React, { useState } from "react"
import { ServerURL } from "../../services/ServerServices"
import PlusMinusComponent from "../PlusMinusComponenet"
import Colors from "../../../assets/Colors"
import styles from "./ShowCartCss"
import { useSelector,useDispatch } from "react-redux"
import { Divider } from 'react-native-paper';

export default function ShowCart(props) {
    
    const [refresh,setRefresh]=useState(false)
   
    var cart=useSelector((state)=>state.cart) 
    var product=Object.values(cart)
     var keys=Object.keys(cart)
    
    var dispatch=useDispatch()
    
  const handleQtyChange=(value,product)=>{
    if(value==0)
    {
      dispatch({type:'DELETE_CART',payload:[product.listproductid,product]})  
    }
    else
    {
    product['qty']=value

    dispatch({type:'ADD_CART',payload:[product.listproductid,product]})
    }
    props.setRefresh(!props.refresh)
    setRefresh(!refresh)
   
    
  }
    
    const showProducts=()=>{
    return product.map((item) => {
        return ( <View>
           <View style={{flexDirection:'row'}}>
                <View style={styles.imagestyling} >
                    <Image source={{ uri: `${ServerURL}/images/${item.image}` }} style={styles.productimage} />
                </View>
                <View style={styles.pricing}>
                <Text style={styles.productname}>{item.productname}</Text>
             <Text style={styles.prices}>{item.weight} {item.pricetype}</Text>
              <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:15,paddingTop:1,paddingRight:7,textDecorationLine:'line-through',color:Colors.red}} >&#8377;{item.price*item.qty}</Text>
                     <Text style={{fontSize:16,fontWeight:400,color:Colors.black}} >&#8377;{item.offerprice*item.qty}</Text>
                    </View>
                </View>
                <View style={{alignSelf:'center'}} >
                <PlusMinusComponent data={item}  onChange={(value)=>handleQtyChange(value,item)}   />
                </View>
             
                </View> 
                <Divider  style={{width:'98%',marginVertical:8}}/>
                </View>
                )
    })
  }

    return(
      <SafeAreaView style={styles.Container}>
   {keys.length==0?<Text style={{alignSelf:'center',fontSize:25,color:Colors.red,marginVertical:10}}>your cart is empty</Text>:<></>}
   {showProducts()}
    </SafeAreaView>
    )


}

