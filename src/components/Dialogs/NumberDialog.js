import {StyleSheet, View, Modal, Text,ImageBackground} from 'react-native';
import React,{useState} from 'react';
import Button from '../Button';
import Colors from '../../../assets/Colors';
import TextBox from '../TextBox';
import OTPDialog from './OTPDialog';

const NumberDialog = (props) => {

  const [otpDialog,setOtpDialog]=useState(false)
  const [mobileno,setMobileno]=useState('')
  const [otp,setOtp]=useState('')
  const [counter,setCounter]=useState(0)

   
  const generateOTP=()=>{
    var otp=(parseInt(Math.random()*8999)+1000)
     console.log("OTP",otp)
       setOtp(otp)
      setOtpDialog(true)
      props.setStatus(false)
      setCounter(10)
     } 

    return (
            <View style={styles.container}> 
         <Modal  visible={props.status} animationType="slide"  >
         <ImageBackground source={require('../../../assets/blur.png')} resizeMode='stretch' style={styles.img}>

        <View style={styles.container}>
          <View style={styles.textview}>
            <Text  style={styles.txtstyle}>Gwaliorbasket</Text>
            <View style={styles.description}>
              <Text style={styles.txtdescription}>
                Please Submit Your Mobile Number
              </Text>
              <View style={styles.txtbox}>
              <TextBox error={false}  onChangeText={(txt)=>setMobileno(txt)} keyboardType={'number-pad'}  placeHolder={'Enter your mobile number'}  icon={'mobile-alt'}/>
              </View>
              <View style={styles.rowstyle}>
                <View style={styles.submitbtn}>
                 {mobileno.length==10?<Button
                    bgColor={Colors.darkGreen}
                    foreColor={Colors.white}
                    title={'Submit'}
                    width={140}
                    height={40}
                    onPress={generateOTP}

                  />:<Button
                  bgColor={Colors.darkGrey}
                  foreColor={Colors.white}
                  title={'Submit'}
                  width={140}
                  height={40}
                />}
                </View>
                <View style={styles.cancelbtn}>
                  <Button
                    bgColor={Colors.darkGreen}
                    foreColor={Colors.white}
                    title={'Cancel'}
                    width={140}
                    height={40}
                    onPress={()=>props.setStatus(false)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        </ImageBackground>

      </Modal>
      <OTPDialog otp={otp}  counter={counter} setCounter={setCounter} generateOTP={generateOTP} otpDialog={otpDialog} mobileno={mobileno} setOtpDialog={setOtpDialog} />
    </View>
   

  );
};

export default NumberDialog;

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
    width: 320,
    height: 230,
    backgroundColor: '#fff',
    padding: '3.5%',
    borderColor: Colors.black,
     borderRadius: 15,
    borderWidth: 0.4,
  },
  txtstyle: {
    fontSize: 26,
    fontWeight: '800',
    color:Colors.skyBlue,
    letterSpacing: 1.2,
    alignSelf:'center'
    
  },
  description: {
    marginTop: '5%',
  },
  txtdescription: {
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  txtbox: {
  
    width:290,
    height:70,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 3,
    marginTop: '4%',
    
  },
  mobtxt: {
    justifyContent: 'flex-start',
    fontSize: 18,
  },
  submitbtn: {
    alignItems: 'flex-start',
    marginTop: '4%',
  },
  rowstyle: {
    flexDirection: 'row',
  },
  cancelbtn: {
    alignItems: 'flex-end',
    marginTop: '4%',
    marginHorizontal: '2%',
  },
});
