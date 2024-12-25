import { Text, View, Dimensions,ScrollView } from "react-native";
import ImageComponent from "../components/selectedproduct/ImageComponent";
import UnitComponent from "../components/selectedproduct/UnitComponent";
import Time from "../components/selectedproduct/Time";
import { useState,useEffect } from "react";
const {width, height} = Dimensions.get('window')
import PlusMinusComponent from "../components/PlusMinusComponenet";
import FloatingCart from "../components/FloatingCart";
import { useDispatch } from "react-redux";

export default function SelectedProduct(props){

    var dispatch=useDispatch()
    const time = {time:'10 min'}
    
    const [product,setProduct]=useState(props.route.params.product)
    const [refresh,setRefresh]=useState(false)
    var images=product.images.split(",")

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
   
   return(
   <View style={{width:width,backgroundColor:'#f5f6fa',position:'relative'}}>

     <ScrollView>
        <ImageComponent images={images} /> 
       
       <Text style={{fontSize:18, fontWeight:500, color:'black', padding:10}} >{product.productname} {product.weight}{product.pricetype}</Text>
       
        <View style={{flexDirection:'row'}}>
        
        <Time data={time} />
       
       <View style={{marginLeft:'auto'}}>
      <PlusMinusComponent data={product} onChange={(value)=>handleQtyChange(value,product)}/>
      </View>
      
      </View>
        
        <UnitComponent product={product} setProduct={setProduct}/>
      
        </ScrollView>

        <FloatingCart height={height*.810} />
        
    </View>
    )
}