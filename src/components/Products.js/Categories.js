import React, { useEffect, useState } from "react";
import {Text,View,ScrollView,Image,Dimensions, TouchableOpacity} from 'react-native';
import { ServerURL } from "../../services/ServerServices";
import styles from './CategoriesCss'
const {width, height} = Dimensions.get('window');

export default function Categories({categories,setCategoryId,categoryId,setCategoryName,setProducts})
{
    const [refresh,setRefresh]=useState(false)
    const [categoryClr,setCategoryClr]=useState('')
    const [clkClr,setClkClr]=useState('')

    const defClr=()=>{
        setCategoryClr(categoryId)
        setClkClr('')
    }

    useEffect(()=>{
   defClr()
    },[categoryId])

const handleClick=(item,index)=>{
  setProducts('')
  setCategoryId(item.categoryid)
  setCategoryName(item.categoryname)
  setCategoryClr('')
  setClkClr(item.categoryid)
    setRefresh(!refresh)

}


    const showCategory=()=>{
        return  categories.map((item,index)=>{
        return( <View>
          <TouchableOpacity onPress={()=>handleClick(item,index)}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:(categoryClr==item.categoryid || clkClr==item.categoryid)?'pink':'#fff'}}>
             <View style={{margin:5,width:75,height:75,borderRadius:45,backgroundColor:'#dfe6e9',justifyContent:'center',alignItems:'center'}}>
               <Image style={styles.imageStyle} 
                   source={{uri:`${ServerURL}/images/${item.icon}`}}/>
            </View>
                <Text numberOfLines={2} style={styles.categoryName}>{item.categoryname}</Text>
        </View>
        </TouchableOpacity>

        </View>
)
    })
      }


    return(
        <View>
        
        
       <Text  style={styles.heading}>All Categories</Text>
     
       <ScrollView  showsVerticalScrollIndicator={false} >
       {showCategory()}
       </ScrollView>
      
       </View>
    
    )
}