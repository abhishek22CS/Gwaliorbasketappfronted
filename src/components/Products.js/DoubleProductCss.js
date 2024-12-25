import { StyleSheet } from "react-native"
import Colors from "../../../assets/Colors";
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');



export default styles=StyleSheet.create({
    
     mainView:
     {alignItems:'center',borderColor:'#a4b0be',borderWidth:1,width:width*0.36,height:height*0.27,borderRadius:10,margin:4.5},
    
    backGround:
    { width:width*0.36,height:height*0.268,alignItems:'center' },

     image:
    {resizeMode:'contain',width:70,height:75,alignSelf:'center'},

    nameWeight:
    {marginVertical:5,fontWeight:'bold',alignSelf:'center',fontSize:12},

    priceView:
    {justifyContent:'flex-start',width:width*0.34},

    actualPrice:
    {fontWeight:'bold',textDecorationLine:'line-through',color:Colors.red},

    offerPrice:
    {fontWeight:'bold',color:Colors.black},

    save:
    {fontWeight:'bold',color:Colors.darkGreen,fontSize:13},

    button:
    {marginVertical:8},
    
titleStyle:{
        fontSize:19,fontWeight:'bold',fontFamily:'Poppins',marginTop:10,color:Colors.black,alignSelf:'center'   },
    
    })