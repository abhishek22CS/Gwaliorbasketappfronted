import React,{useState,useEffect} from "react";
import {Text,View,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
const {width, height} = Dimensions.get('window');
import CircleComponent from "../components/CircleComponent/CircleComponent";
import MultipleProductComponent from "../components/MultipleProductComponent/MultipleProductComponent";
import TextBox from "../components/TextBox";
import { getData,postData } from "../services/ServerServices";
import FloatingCart from "../components/FloatingCart";
import Spacer from "../components/Spacer";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import { ServerURL } from "../services/ServerServices";
import ExploreNewCategory from "../components/ExploreNewCategory";
import TryThisWeek from "../components/TryThisWeek";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/FontAwesome'



export default function Home()
{
   const[categories,setCategories]=useState([])
   const[products,setProducts]=useState([])
   const[products2,setProducts2]=useState([])
   const[products3,setProducts3]=useState([])
   const[products4,setProducts4]=useState([])
   const[products5,setProducts5]=useState([])
   const [refresh,setRefresh]=useState(false)
    var navigation=useNavigation()
  
   var cart=useSelector((state)=>state.cart) 
   var keys=Object.keys(cart)



      useEffect(function(){
        setInitialData()
        console.disableYellowBox = true
       },[])
      
       const setInitialData=async()=>{
            var result=await getData('userinterface/fetch_explorebycategory')
            setCategories(result.data)
            var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Dairy Products, Breads&Eggs'})
            setProducts(result.data)
            var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Drinks & juices'})
            setProducts2(result.data)
            var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Tea & Coffee'})
            setProducts3(result.data)
            var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Biscuites  &  cookies'})
            setProducts4(result.data)
            var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Daily Feast'})
            setProducts5(result.data)
       }

   
    // var Products = [
    //     {
    //       id: 1,
    //       image: "chocobrownie.png",
    //       productname: "Chocobrownie",
    //       weight: "1 Kg",
    //       offerprice: " 100",
    //       actualprice: " 110"
    //     },
    //     {
    //         id: 2,
    //        image: "darkfantasy.png",
    //        productname: "Darkfantasy",
    //           weight: "1 Pc",
    //         offerprice: " 65",
    //         actualprice: " 69",
    //       },
    //       {
    //         id: 3,
    //        image: "diet Coke.png",
    //         productname: "Diet Coke",
    //           weight: "1 L",
    //         offerprice: "100",
    //         actualprice: "120",
    //       },
    //       {
    //         id: 4,
    //        image: "espresso.png",
    //        productname: "Espresso",
    //           weight: "550 ml",
    //         offerprice: "80",
    //         actualprice: "100",
    //       },
    //       {
    //         id: 5,
    //        image: "greentea.png",
    //        productname: "Lipton greentea",
    //           weight: "250 g",
    //         offerprice: "65",
    //         actualprice: "70",
    //       },
    //       {
    //           id: 6,
    //          image: "gulabjamun.png",
    //           productname: "Bikano gulabjamun",
    //           weight: "1 Kg",
    //           offerprice: " 340",
    //           actualprice: " 380",
    //         },
    //         {
    //           id: 7,
    //          image: "harvestbread.png",
    //          productname: "Harvest bread",
    //             weight: "400 g",
    //           offerprice: " 55",
    //           actualprice: " 69",
    //         },
    //         {
    //           id: 8,
    //          image: "indiagaterice.png",
    //          productname: "Indiagate rice",
    //             weight: "1 Kg",
    //           offerprice: "300",
    //           actualprice: "320",
    //         },
    //         {
    //           id: 9,
    //          image: "kajukatli.png",
    //          productname: "Bikano kajukatli",
    //             weight: "500 g",
    //           offerprice: "480",
    //           actualprice: "500",
    //         },
    //         {
    //           id: 10,
    //          image: "nescafegoldcoffee.png",
    //          productname: "Nescafe coffee",
    //          weight: "250 g",
    //           offerprice: "230",
    //           actualprice: "240",
    //         },

    // ]

    const handleClick=()=>{
        navigation.navigate('Searching')
      }

  
    

    return(
     
        <View style={{width:width,backgroundColor:'#f5f6fa',position:'relative'}}>
          {/* <ImageBackground 
    source={require('../../assets/bk.png')}> */}
           <ScrollView>

            <View style={{marginTop:8,alignItems:'center'}}>
                <TextBox width={width*0.95} onPressIn={(event)=>handleClick(event)} placeHolder={"Search Products Here....."} icon={"search"}/>
            </View>

            <View>
               <Banner/>
            </View>
            
            <View>
        <CircleComponent heading={"Explore Categories"} categories={categories}/>
        </View>
        
       <View>
        <MultipleProductComponent setRefresh={setRefresh} refresh={refresh} heading={"Dairy Products"} products={products}/>
       </View>
   
       <View>
        <MultipleProductComponent setRefresh={setRefresh} refresh={refresh} heading={"Drinks & Juices"} products={products2}/>
       </View>

       <View>
        <Image source={{uri:`${ServerURL}/images/${'summer.webp'}`}} style={{resizeMode:'stretch',height:130,width:360,alignSelf:'center',marginBottom:20}}/>
       </View>

       <View>
        <MultipleProductComponent setRefresh={setRefresh} refresh={refresh} heading={"Tea & Coffee"} products={products3}/>
       </View>

       <View>
        <ExploreNewCategory/>
       </View>

       <View>
      <TryThisWeek/>
       </View>
   
       <View>
        <MultipleProductComponent setRefresh={setRefresh} refresh={refresh} heading={"Daily Feast"} products={products5}/>
       </View>

       <View>
        <MultipleProductComponent setRefresh={setRefresh} refresh={refresh} heading={"Biscuites & cookies"} products={products4}/>
       </View>

       <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
       <View>
       <Image
          style={{resizeMode:'stretch', width: 180, height:100}}
          source={require('../../assets/logo.png')}
        />
        </View>
        
        <View  style={{marginVertical:20}}>
       
        <View>
            <Text style={{fontSize:16,fontWeight:600}}>Connect with us.... </Text>
        </View>
        
        <View style={{flexDirection:'row',margin:10}}>
        <Icons name='whatsapp' size={20} color={'#218c74'} style={{marginRight:2}}  />
        <Icon name='facebook-square' size={20} color={'#6c5ce7'} style={{marginLeft:7}}/>
        <Icon name='instagram' size={20} color={'#d35400'} style={{marginLeft:8}}/>
        <Icon name='twitter' size={20} color={'#3498db'} style={{marginLeft:8}}/>
        </View>

        </View>

       </View>


       {keys.length>0?<Spacer height={70}/>:<></>}
       
       </ScrollView>
       {/* </ImageBackground> */}
     
    
       <FloatingCart height={height*.835} />
        </View>
        
    )
}