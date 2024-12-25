import { StyleSheet } from "react-native"
import Colors from "../../../assets/Colors"
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');



export default styles=StyleSheet.create({
    
     mainView:
     {alignItems:'center',borderColor:'#a4b0be',borderWidth:1,width:width*0.42,height:height*0.31,borderRadius:10,margin:15},
    
    backGround:
    { width:width*0.418,height:height*0.308,alignItems:'center' },

     image:
    {resizeMode:'contain',width:100,height:100,alignSelf:'center'},

    nameWeight:
    {marginVertical:5,fontWeight:'bold',alignSelf:'center'},

    priceView:
    {justifyContent:'flex-start',width:width*0.34},

    actualPrice:
    {fontWeight:'bold',textDecorationLine:'line-through',color:Colors.red},

    offerPrice:
    {fontWeight:'bold',color:Colors.black},

    save:
    {fontWeight:'bold',color:Colors.darkGreen,fontSize:15},

    button:
    {marginVertical:8}
    
    })