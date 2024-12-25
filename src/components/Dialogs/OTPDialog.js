
import {StyleSheet, Text, View, Modal,ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import Colors from '../../../assets/Colors';
import Button from '../Button';
import Icons from 'react-native-vector-icons/Entypo'
import AddressDialog from './AddressDialog';
import { postData } from '../../services/ServerServices';
import OTPTextInput from 'react-native-otp-textinput'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { storeData } from '../../storage/AsyncStroage';

 export default function OTPDialog(props){
 
  const[addressDialog,setAddressDialog]=useState(false)
  const[userOtp,setUserOtp]=useState('')
  const[userData,setUserData]=useState([])
  const [refresh,setRefresh]=useState(false)


     {props.otpDialog && props.counter==9?alert(props.otp):''}

  useEffect(()=>{
    const timer =
    props.counter > 0 && setInterval(()=>props.setCounter(props.counter-1),1000);
    return ()=> clearInterval(timer);
      },[props.counter])

  const checkUserMobile=async()=>{ 
        if(userOtp==props.otp)
        { 
        console.log("Correct Otp")
         var result=await postData('userinterface/add_new_user',{mobileno:props.mobileno})
         if(result.status==1)
         {
          var resultAddress=await postData('userinterface/chk_user_address',{mobileno:props.mobileno})
          if(resultAddress.status)
          {
            alert("Make Payment")
            // await storeData(props.mobileno,resultAddress.data)
            setRefresh(!refresh)
            props.setOtpDialog(false)
            setUserData(result.data)
          }
          else
          { props.setOtpDialog(false)
            setUserData(result.data)
            setAddressDialog(true)
          }  
    
         }
         else
         {
          props.setOtpDialog(false)
          setUserData(result.data)
          setAddressDialog(true)
       
     
         }
        }
        else{
        alert("Invalid Otp")
        setUserOtp('')
        }
          }


  return (
    <View style={styles.container}>
      <Modal animationType='fade' transparent={true} visible={props.otpDialog} >
      <ImageBackground source={require('../../../assets/blur.png')} resizeMode='stretch' style={styles.img}>

        <View style={styles.container}>
          <View style={styles.textview}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.txtstyle}>Gwaliorbasket</Text>
            <TouchableOpacity style={{alignSelf:'center',marginLeft:'auto'}} onPress={()=>props.setOtpDialog(false)} >
            <Icons  name={'circle-with-cross'} size={28}/>
            </TouchableOpacity>
            </View>
           
            <View style={styles.description}>
              <Text style={styles.txtdescription}>
              OTP sent to  {`+91XXXXXX${props.mobileno.substring(6)}`}
              </Text>
              
              <View style={styles.txtInputstyle}>
              <OTPTextInput tintColor={'green'} handleTextChange={(txt)=>setUserOtp(txt)}  />
              </View>

             </View>
             {props.counter==0?<><View style={{alignSelf:'center',flexDirection:'row',marginBottom:15}}><Text style={{fontSize:19}}>Didn't get code?</Text><TouchableOpacity onPress={()=>props.generateOTP()}><Text style={{fontSize:20,fontWeight:'bold',marginLeft:3}}>send again<Icon name='sms' size={20} style={{marginTop:8}}/></Text></TouchableOpacity>
            </View></>:<><View style={{ alignSelf: "center"}}><Text style={{color:Colors.red,fontSize:20,marginBottom:15 }} >Resend OTP in 00:0{props.counter}</Text></View></>}

             {userOtp.length==4?<Button onPress={checkUserMobile} bgColor={Colors.darkGreen} foreColor={Colors.white} width={275} height={40} title={"Verify OTP"}/>:<Button bgColor={Colors.darkGrey} foreColor={Colors.white} width={275} height={40} title={"Verify OTP"}/>}
            <View>
            </View>



          </View>
        </View>

        </ImageBackground>
      </Modal>
      <AddressDialog userData={userData} addressDialog={addressDialog} mobileno={props.mobileno} setAddressDialog={setAddressDialog}/>
    </View>
  );
};
 

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
     flex:1,
     width:'100%',
   
  },
  img: {
    height:'104%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textview: {
    width: 325,
    height: 280,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    padding: '3.5%',
    borderColor: Colors.black,
    borderRadius: 12,
    borderWidth: 0.4,
    elevation:9
  },
  txtstyle: {
    fontSize: 28,
    fontWeight: '800',
    color:Colors.skyBlue,
    letterSpacing: 1.2,
  },
  description: {
    marginTop: '5%',
  },
  txtdescription: {
    fontSize: 22,
    fontWeight:350
  },
  txtInputstyle: {
    width: 40,
    marginHorizontal: '8%',
    marginTop:'2%',
    marginBottom:'8%'

  },
  txtinput: {
    fontSize: 25,
  },
  txtinputrowstyle: {
    flexDirection: 'row',
  },
});

// import {StyleSheet, Text, View, Modal, TextInput,ImageBackground, TouchableOpacity} from 'react-native';
// import React, {useRef, useState} from 'react';
// import Colors from '../../../assets/Colors';
// import Button from '../Button';
// import Icons from 'react-native-vector-icons/Entypo'
// import AddressDialog from './AddressDialog';
// import { postData } from '../../services/ServerServices';

//  export default function OTPDialog(props){
 
//   const[addressDialog,setAddressDialog]=useState(false)

//   const pin1Ref = useRef(null);
//   const pin2Ref = useRef(null);
//   const pin3Ref = useRef(null);
//   const pin4Ref = useRef(null);

//   const [pin1, setPin1] = useState('');
//   const [pin2, setPin2] = useState('');
//   const [pin3, setPin3] = useState('');
//   const [pin4, setPin4] = useState('');

//   var userOtp=pin1+pin2+pin3+pin4
//   console.log(userOtp+","+props.otp)

//   const checkUserMobile=async()=>{ 
//     if(userOtp==props.otp)
//     { 
//     console.log("Correct Otp")
//      var result=await postData('userinterface/add_new_user',{mobileno:props.mobileno})
//      if(result.status==1)
//      {
//       var resultAddress=await postData('userinterface/chk_user_address',{mobileno:props.mobileno})
//       if(resultAddress.status)
//       {
//         alert("Make Payment")
//       }
//       else
//       { props.setOtpDialog(false)
//         setAddressDialog(true)
//       }  

//      }
//      else
//      {
//       props.setOtpDialog(false)
//       setAddressDialog(true)
   
 
//      }
//     }
//     else{
//     alert("Invalid Otp")
//     }
//       }


//   return (
//     <View style={styles.container}>
//       <Modal animationType='fade' transparent={true} visible={props.otpDialog} >
//       <ImageBackground source={require('../../../assets/blur.png')} resizeMode='stretch' style={styles.img}>

//         <View style={styles.container}>
//           <View style={styles.textview}>
//             <View style={{flexDirection:'row'}}>
//             <Text style={styles.txtstyle}>Gwaliorbasket</Text>
//             <TouchableOpacity style={{alignSelf:'center',marginLeft:'auto'}} onPress={()=>props.setOtpDialog(false)} >
//             <Icons  name={'circle-with-cross'} size={28}/>
//             </TouchableOpacity>
//             </View>
//             <View style={styles.description}>
//               <Text style={styles.txtdescription}>
//                  OTP Verification
//               </Text>
//             </View>
//             <View style={styles.txtinputrowstyle}>
//               <View style={styles.txtInputstyle}>
//                 <TextInput
//                   ref={pin1Ref}
//                   keyboardType={'number-pad'}
//                   maxLength={1}
//                   onChangeText={(txt)=>setPin1(txt)}
//                   onChange={pin1 => {
//                     setPin1(pin1);
//                     if (pin1 != '') {
//                       pin2Ref.current.focus();
//                     }
//                   }}
//                   style={styles.txtinput}
//                 />
//               </View>
//               <View style={styles.txtInputstyle}>
//                 <TextInput
//                   ref={pin2Ref}
//                   keyboardType={'number-pad'}
//                   maxLength={1}
//                   onChangeText={(txt)=>setPin2(txt)}
//                   onChange={pin2 => {
//                     setPin2(pin2);
//                     if (pin2 != '') {
//                       pin3Ref.current.focus();
//                     }
//                   }}
//                   style={styles.txtinput}
//                 />
//               </View>
//               <View style={styles.txtInputstyle}>
//                 <TextInput
//                   ref={pin3Ref}
//                   keyboardType={'number-pad'}
//                   maxLength={1}
//                   onChangeText={(txt)=>setPin3(txt)}
//                   onChange={pin3 => {
//                     setPin3(pin3);
//                     if (pin3 != '') {
//                       pin4Ref.current.focus();
//                     }
//                   }}
//                   style={styles.txtinput}
//                 />
//               </View>
//               <View style={styles.txtInputstyle}>
//                 <TextInput
//                   ref={pin4Ref}
//                   keyboardType={'number-pad'}
//                   maxLength={1}
//                   onChangeText={(txt)=>setPin4(txt)}
//                   onChange={pin4 => {
//                     setPin4(pin4);
//                     if (pin4 != '') {
//                       // alert('Successfully Signed In !!!');
//                         console.log("OTP Is Working!!!")
//                     }
//                   }}
//                   style={styles.txtinput}
//                 />
//               </View>
//             </View>
//             {userOtp.length==4?<Button onPress={checkUserMobile} bgColor={Colors.darkGreen} foreColor={Colors.white} width={275} height={40} title={"Verify OTP"}/>:<Button bgColor={Colors.darkGrey} foreColor={Colors.white} width={275} height={40} title={"Verify OTP"}/>}
//           </View>
//         </View>
//         </ImageBackground>
//       </Modal>
//       <AddressDialog addressDialog={addressDialog} mobileno={props.mobileno} setAddressDialog={setAddressDialog}/>
//     </View>
//   );
// };
 

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//      flex:1,
//      width:'100%',
   
//   },
//   img: {
//     height:'104%',
//     width:'100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textview: {
//     width: 320,
//     height: 250,
//     backgroundColor: '#fff',
//     // justifyContent: 'center',
//     padding: '3.5%',
//     borderColor: Colors.black,
//     borderRadius: 12,
//     borderWidth: 0.4,
//     elevation:9
//   },
//   txtstyle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color:Colors.skyBlue,
//     letterSpacing: 1.2,
//   },
//   description: {
//     marginTop: '5%',
//   },
//   txtdescription: {
//     fontSize: 22,
//     fontWeight:350
//   },
//   txtInputstyle: {
//     width: 40,
//     borderColor: '#8e8e8e',
//     borderWidth: 1,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignContent: 'center',
//     paddingLeft: '4.5%',
//     marginVertical: '8%',
//     marginHorizontal: '5%',
//     borderRadius: 6,
//   },
//   txtinput: {
//     fontSize: 25,
//   },
//   txtinputrowstyle: {
//     flexDirection: 'row',
//   },
// });