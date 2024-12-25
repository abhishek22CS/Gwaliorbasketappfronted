import {useEffect, useState} from 'react'
import {Dimensions,Text,View } from 'react-native'
const {width, height} = Dimensions.get('window');
import Colors from '../../assets/Colors';
import Button from './Button';
import { useSelector } from 'react-redux';

export default function PlusMinusComponent(props){

  var cart=useSelector((state)=>state.cart)
  var qty=cart[props.data.listproductid]?.qty

  var tqty=0
  if(qty!=undefined)
  tqty=qty

  const [value,setValue]=useState(tqty)

const handlePlusClick=()=>{
         var v=value
          if(v<5)
        {
         setValue(v+1)
         props.onChange(value+1)
        }
}

const handleMinusClick=()=>{
    var v=value
    if(v>0)
  {
   setValue(v-1)
   props.onChange(value-1)
  }

}
return(<View>
     <View style={{ paddingRight: 10, marginLeft: '4%', marginTop: '3%' }}>
               {value==0? <Button onPress={handlePlusClick} title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white} width={width*.25} height={height*0.042}/> :
            <View style={{alignItems:'center',justifyContent:'center',borderRadius:5,flexDirection:'row',borderWidth:.2,borderColor:Colors.darkGreen,width:width*.24}}>
            <Button onPress={handlePlusClick} title={"+"} bgColor={Colors.darkGreen} foreColor={Colors.white} width={width*.09} height={height*0.042}/>
            <Text style={{marginHorizontal:5,fontSize:20,color:Colors.black}}>{value}</Text>
            <Button onPress={handleMinusClick} title={"-"} bgColor={Colors.darkGreen} foreColor={Colors.white} width={width*.09} height={height*0.042}/>
            </View >}
            </View>
    </View>)

}