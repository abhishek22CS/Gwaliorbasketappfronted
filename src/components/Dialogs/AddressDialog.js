import { StyleSheet,Text,View,Modal,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Button from '../Button';
import Colors from '../../../assets/Colors';
import Icons from 'react-native-vector-icons/Entypo'
import TextBox from '../TextBox';
import { postData } from '../../services/ServerServices';
import { storeData } from '../../storage/AsyncStroage';

const AddressDialog = (props) => {

  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [state,setState]=useState('')
  const [city,setCity]=useState('')
  const [zipCode,setZipCode]=useState('')
  const [refresh,setRefresh]=useState(false)

  const handleSubmit=async()=>{
    
    var body={usersid:props.userData[0]?.usersid,mobileno:props.mobileno,fullname:name,state:state,city:city,zipcode:zipCode,address:address}
   
    var result=await postData('userinterface/add_user_address',body)
    if(result.status)
    { 
      //  await storeData(props.userData[0].mobileno,body)
      props.setAddressDialog(false)
      setRefresh(!refresh)
      alert('address Submit')
    }
    else
    {
      alert('Fail to submit address')
    }
  } 
  
  return (
    <View style={styles.container}>
      <Modal visible={props.addressDialog} animationType="slide" transparent={true}>
      <ImageBackground source={require('../../../assets/blur.png')} resizeMode='stretch' style={styles.img}>

        <View style={styles.container}>
          <View style={styles.txtview}>
         
          <View style={{flexDirection:'row'}}>

          <Text style={styles.txtstyle}>Address detail</Text>
              <TouchableOpacity style={{alignSelf:'center',marginLeft:'auto'}} onPress={()=>props.setAddressDialog(false)} >
              <Icons  name={'circle-with-cross'} size={20}/>
              </TouchableOpacity>
              </View>
             
              <View style={styles.txtbox}>
                 <TextBox error={false} width={280} height={50} value={`+91- ${props.mobileno}`}  placeHolder={'Mobile number'} />
               </View>

               <View style={styles.txtbox}>
                 <TextBox error={false} width={280} onChangeText={(txt)=>setName(txt)}  height={50}  placeHolder={'Enter Your Full Name...'} />
               </View>

      
               <View style={styles.txtbox}>
                 <TextBox error={false} width={280} height={50} onChangeText={(txt)=>setAddress(txt)}   placeHolder={'Your Delivery Address...'} />
               </View>

               <View style={styles.txtbox}>
                 <TextBox error={false} width={280} height={50} onChangeText={(txt)=>setCity(txt)}   placeHolder={' Enter Delivery City...'} />
               </View>

               <View style={styles.txtbox}>
                 <TextBox error={false} width={280} height={50} onChangeText={(txt)=>setState(txt)}   placeHolder={'Enter Delivery State...'} />
               </View>

               <View style={styles.txtbox}>
                 <TextBox error={false} width={280} height={50} onChangeText={(txt)=>setZipCode(txt)}   placeHolder={'Enter Delivery Zip Code...'} />
               </View>

              <View style={styles.btn}>
                <Button bgColor={Colors.darkGreen} foreColor={Colors.white} onPress={handleSubmit} width={250} height={45} title={'Submit'}  />
              </View>
          
          </View>
        </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};

export default AddressDialog;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  img: {
    height:'104%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtview: {
    borderWidth: 0.4,
    borderColor: '#000',
    padding: '2%',
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 5,
  },
  txtbox: {
    borderColor: '#000',
    justifyContent: 'center',
    marginTop: '3%',
  },
  txtstyle: {
    fontSize: 25,
    fontWeight: '800',
    color:'#000',
    letterSpacing: 1.2,
  },
    btn: {
    marginVertical: '4%',
    marginHorizontal:'5%'
  },
});
