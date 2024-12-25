import { StyleSheet } from "react-native"
import Colors from "../../assets/Colors";
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');



export default styles=StyleSheet.create({
    
     mainView:
     {alignItems:'center',borderColor:'#a4b0be',borderWidth:1,width:width*0.3,height:height*0.26,borderRadius:10,margin:5,marginLeft:8},
    
    backGround:
    { width:width*0.3,height:height*0.26,alignItems:'center' },

     image:
    {resizeMode:'contain',width:70,height:75,alignSelf:'center'},

    nameWeight:
    {marginVertical:5,fontWeight:'bold',alignSelf:'center',fontSize:11},

    priceView:
    {justifyContent:'flex-start',width:width*0.25},

    actualPrice:
    {fontWeight:'bold',textDecorationLine:'line-through',color:Colors.red},

    offerPrice:
    {fontWeight:'bold',color:Colors.black},

    save:
    {fontWeight:'bold',color:Colors.darkGreen,fontSize:13},

    button:
    {marginVertical:8},

    
    })