import { View,Dimensions, Text,FlatList,ImageBackground,TouchableOpacity,Image } from "react-native";
const {width, height} = Dimensions.get('window');
import TextBox from "../components/TextBox";
import { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { postData,ServerURL } from "../services/ServerServices";
import styles from '../components/SearchingCss'
import PlusMinusComponent from "../components/PlusMinusComponenet";
import { useDispatch } from "react-redux";
import FloatingCart from "../components/FloatingCart";


export default function Searching (){

    const [searchProduct,setSearchProduct]=useState('')
    const [productList,setProductList]=useState([])
    const [refresh,setRefresh]=useState(false)
    var navigation=useNavigation()
    var dispatch=useDispatch()

    const handleChange=(txt)=>{
        setSearchProduct(txt)
        //  navigation.navigate('Searching')
         setProductList('')
         setRefresh(!refresh) 
        }

        const fetchProductsFromSearching=async()=>{
            var result=await postData('userinterface/fetch_products_from_searching',{word:searchProduct})
            setProductList(result.data)
        }
    
        const refreshPage=()=>{
            setRefresh(!refresh)
        }
    
    
        useEffect(function(){
            fetchProductsFromSearching()
            refreshPage()
           
        },[searchProduct])

        
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

        const Item = ({data}) =>{
            return(<View >
               <SingleProduct data={data}/>
                </View>
            )
        
         }

         const SingleProduct=({data})=>{
            return(<View >
                <View style={styles.mainView}>
                <ImageBackground style={styles.backGround}
                imageStyle={{ borderRadius: 10}}
            source={require('../../assets/bk2.png')}>
               
               <TouchableOpacity onPress={()=>navigation.navigate("SelectedProduct",{product:data})}>
                <Image style={styles.image} source={{uri:`${ServerURL}/images/${data.image}`}}/>
                
                <Text style={styles.nameWeight}> {data.productname} {data.weight} {data.pricetype}</Text>
                
                <View style={styles.priceView}>
                <Text style={styles.actualPrice}>&#8377;{data.price}</Text>
                <Text style={styles.offerPrice}>&#8377;{data.offerprice}</Text>
                <Text style={styles.save}>You Save &#8377;{data.price-data.offerprice}</Text>
                </View>
        
                </TouchableOpacity>
        
                  <View style={{marginTop:2}}>
                  <PlusMinusComponent data={data} setRefresh={setRefresh} refresh={refresh} onChange={(value)=>handleQtyChange(value,data)}/>
                            </View>
        
                
                </ImageBackground>
                </View>
                </View>
            )
        }
     

    

    return(
        <View>
         <View style={{marginTop:8,alignItems:'center'}}>
                <TextBox width={width*0.95} onChangeText={(txt)=>handleChange(txt)} placeHolder={"Search Products Here....."} icon={"search"}/>
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{fontFamily:'poppins',fontSize:16,fontWeight:'bold'}}> Searched products ({productList?.length}) Items</Text>
            </View>
     <View  style={{marginBottom:30}}>
            <FlatList
    data={productList}
    numColumns={3}
    scrollEnabled
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <Item data={item} />}
    keyExtractor={item => item.id}
      />
      </View>

<FloatingCart height={height*.845} />
        </View>
    )
}