
import React from 'react';
import { View, ScrollView } from 'react-native';
import Delivery from '../components/Cart/Delivery';
import ShowCart from '../components/Cart/ShowCart';
import BillDetails from '../components/Cart/BillDetails';
import FeedingIndia from '../components/Cart/FeedingIndia';
import DeliveryInstructions from '../components/Cart/DeliveryInstructions';
import Tip from '../components/Cart/Tip';
import {useState,useEffect} from 'react'
import Button from '../components/Button';
import Colors from '../../assets/Colors';
import { useSelector,useDispatch } from 'react-redux';
import NumberDialog from '../components/Dialogs/NumberDialog';
import { useNavigation } from '@react-navigation/native';
import { getKey,getStoreData} from '../storage/AsyncStroage';
import { ServerURL } from '../services/ServerServices';
import RazorpayCheckout from 'react-native-razorpay';

export default function Cart(props) {

    const [user,setUser]=useState([])
    const [total,setTotalAmt]=useState()
    const [refresh,setRefresh]=useState(false)
    const [donation,setDonation]=useState('')
    const [tip,setTip]=useState('')   
    const [status,setStatus]=useState(false)

    var navigation=useNavigation() 
    var dispatch=useDispatch()

    const checkUser=async()=>{
        var key=await getKey()
       var users=await getStoreData(key)
       setUser(users)
    }
    
      useEffect(()=>{
     checkUser() 
      },[])

    var options = {
        description: 'thank you for visting Gwaliorbasket',
        image:'https://play-lh.googleusercontent.com/YS291oQM8U0VD8XnGWmCluzEmi68yT3pVBZW6rtjdTnGxuy172cZ8UM_LquQt1IScc4',
        currency: 'INR',
        key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
        amount: total*100,
        name:user[0]?user[0].fullname:user.fullname,
        prefill: {
          contact:user[0]?user[0].mobileno:user.mobileno,
          name: 'Gwaliorbasket'
        },
        theme: {color: '#a29bfe'}
      }

      const handlePayment=()=>{
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`)
          dispatch({ type: "CLEAR_CART", payload: [] })         
          navigation.navigate('Home')
        }).catch((error) => { 
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`)
        }) 
    }

    const handleClick=async()=>{
        var key=null
        key=await getKey()
        if(key==null)
         {setStatus(true)
          }
        else
          {
           setRefresh(!refresh)
            handlePayment()
        }
        
    }
     
  
    var cart=useSelector((state)=>state.cart) 
    var product=Object.values(cart)
     var keys=Object.keys(cart)


    
    return (<View style={{ flex: 1, marginVertical: 5 }}>
        
        <ScrollView>
            <Delivery />
            <ShowCart  setRefresh={setRefresh} refresh={refresh} />
            <BillDetails donation={donation}  tip={tip} total={total} setTotalAmt={setTotalAmt}/>
            <FeedingIndia setDonation={setDonation} />
            <DeliveryInstructions />
            <Tip setTip={setTip} />
       <View style={{marginVertical:6,marginHorizontal:5,marginLeft:20}}>     
       {keys.length>0?<Button  onPress={()=>handleClick()} bgColor={Colors.darkGreen} foreColor={Colors.white} width={"95%"} title={"Make Payment"} height={40} />:<></>}
       </View>              

        </ScrollView>
    
     <NumberDialog status={status} setStatus={setStatus} />

    </View>)
}
