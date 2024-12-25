import React,{useEffect,useState} from "react";
import {View,Dimensions} from 'react-native';
import Categories from "../components/Products.js/Categories";
import DoubleProduct from "../components/Products.js/DoubleProduct";
import { Divider } from "react-native-paper";
import Colors from "../../assets/Colors";
import { getData,postData } from "../services/ServerServices";
import FloatingCart from "../components/FloatingCart";
const {width, height} = Dimensions.get('window');
import Spacer from "../components/Spacer";
import { useSelector } from "react-redux";

export default function Product(props)
{
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [categoryName,setCategoryName]=useState('');
 const [refresh,setRefresh]=useState(false)
 var cart=useSelector((state)=>state.cart) 
 var keys=Object.keys(cart)

   
  async function getCategories() {
    let result = await getData("userinterface/fetch_explorebycategory");
     setCategories(result.data);
    
  }

  async function getProducts() {
    let result = await postData("userinterface/fetch_categorytolistproducts",{ categoryid: categoryId });
    setProducts(result.data);
  }

  const defCat=()=>{
    setCategoryId(props.route.params.categoryid)
    setProducts('')
    setCategoryName(props.route.params.categoryname)
  }
  useEffect(function(){
    defCat()
  },[props])

  useEffect(() => {
    
    getCategories();
    getProducts()
    setRefresh(!refresh)
  }, [categoryId,categoryName]);

   
    return(
        
        <View style={{flexDirection:'row',position:'relative',marginBottom:keys.length?65:0}}>
        
        <View style={{width:'23%',marginBottom:'25%'}}>
        <Categories categories={categories} setProducts={setProducts} categoryId={categoryId} setCategoryId={setCategoryId} setCategoryName={setCategoryName} />  
        </View>
     
          <Divider style={{height:'auto',width:'.5%',backgroundColor:Colors.grey}}/>

       <View style={{width:'77%',marginBottom:'25%'}}>
        <DoubleProduct products={products} setRefresh={setRefresh} refresh={refresh} categoryName={categoryName}/>
      </View>
      
             {keys.length>0?<Spacer height={160}/>:<></>}

      <FloatingCart height={height*.845} />
         </View>
    
    )
}