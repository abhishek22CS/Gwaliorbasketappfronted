import { View,Dimensions, Text,  TouchableOpacity } from "react-native";
import Colors from "../../assets/Colors";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const {width, height} = Dimensions.get('window');



export default function FloatingCart(props){
    var navigation=useNavigation()
    var cart=useSelector((state)=>state.cart)
    var keys=Object.keys(cart)
    var cart=Object.values(cart)
    var totalamount=cart.reduce((p1,p2)=>{
     var amt=p2.offerprice>0?p2.offerprice*p2.qty:p2.price*p2.qty
     return p1+amt
    },0)
    var actualamount=cart.reduce((p1,p2)=>{
        var amt=p2.price>0?p2.price*p2.qty:p2.price*p2.qty
        return p1+amt
       },0)
    
    return((keys.length>0)?<View style={{position:'absolute',top:props.height,zIndex:1 }}>
          <View style={{margin:10,backgroundColor:Colors.darkGreen,width:width*0.95,height:height*0.09,borderRadius:10,borderWidth:0.4}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                
               <View style={{flexDirection:'row'}}>
                <View style={{padding:8}}>
                <Icons name={'cart-variant'} style={{fontSize:50,color:Colors.white}}/>
                </View>
                <View style={{paddingTop:8,flexDirection:'column',paddingLeft:10}}>
                   {keys.length>1?<Text style={{color:Colors.white,fontSize:20}}>{keys.length} Items</Text>:<Text style={{color:Colors.white,fontSize:20}}>{keys.length} Item</Text>}
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:Colors.white,fontSize:18,paddingTop:1,paddingRight:7,textDecorationLine:'line-through'}} >&#8377;{actualamount}</Text>
                    <Text style={{color:Colors.white,fontSize:19}} >&#8377;{totalamount}</Text>
                    </View>
                </View>
                </View>
 
                   <TouchableOpacity onPress={()=>navigation.navigate('Cart')} style={{alignItems:'center',paddingRight:10,flexDirection:'row'}}>
                    <Text style={{color:Colors.white,fontSize:22,}}>View Cart </Text>
                    <Icons name={'arrow-right-thick'} style={{fontSize:20,color:Colors.white,marginTop:5}}/>
                   </TouchableOpacity>
            
             </View>
          </View>
    </View>:<></>)
}