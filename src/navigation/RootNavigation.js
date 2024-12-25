import React,{useState,useEffect} from 'react';
import Home from '../screens/Home';
import Product from '../screens/Product';
import MyProfile from '../screens/MyProfile';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {View,Image,Text} from "react-native"
import AppHeader from '../components/AppHeader';
import { NavigationContainer } from '@react-navigation/native';
import SelectedProduct from '../screens/SelectedProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import Cart from '../screens/Cart';
import { getStoreData,getKey,removeStoreData } from '../storage/AsyncStroage';
import Searching from '../screens/Searching';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigation() {

//   var user=''
 
//   useEffect(async function(){
 
//  var mobileno=await getKey()
//  user=await getStoreData(mobileno)

 
// })

   const [user,setUser]=useState([])

const checkUser=async()=>{
  //   var key=await getKey()
  //  var users=await getStoreData(key)
  //  setUser(users)
}

  useEffect(()=>{
 checkUser()
  },[])

  const handleLogOut=async(props)=>{
    var key=await getKey()
    removeStoreData(key)
    props.navigation.navigate('Home')
          

  }

  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen  name="Home" component={Home} options={{headerShown: false,
         
         drawerIcon:()=><MCI name={"home-city"} size={24} />,
         
         }} />

        <Drawer.Screen name="Your cart" component={Cart} options={{headerShown: false,
         drawerIcon:()=><MCI name={"briefcase"} size={24} />, 
        }} />
   
           </Drawer.Navigator>
    );
  };




  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{display:'flex',padding:20,alignItems:'center',flexDirection:'column'}}>
        <Image  style={{marginBottom:5,borderRadius:50,resizeMode:'contain',width:100,height:100}}  
        source={require('../../assets/admin.png')}/>
         <Text style={{fontWeight:'bold'}}>{user[0]?user[0].fullname:user.fullname}</Text> 
        <Text>+91-{user[0]?user[0].mobileno:user.mobileno} </Text> 
        </View>
        <DrawerItemList {...props}/> 
          <DrawerItem
            label="My Profile"
            onPress={()=>props.navigation.navigate('MyProfile')} 
            icon={()=><MCI name={"account-box"} size={24}  />}
          />     
          
          <DrawerItem
            label="Settings"
            icon={()=><MCI name={"account-settings"} size={24} />}
          />

          <DrawerItem label="Logout" onPress={()=>handleLogOut(props)}  icon={()=><MCI name={"logout"} size={24} />} />
        
      </DrawerContentScrollView>
    );
  };


  return (
    <NavigationContainer> 
  <Stack.Navigator
   initialRouteName={"Home1"}
     >
      <Stack.Screen name="Home1"  component={ProjectDrawer}  options={{
          header: AppHeader,
        }} />
      <Stack.Screen name="Product" component={Product} options={{
          header: AppHeader,
        }}   />
        <Stack.Screen name="MyProfile" component={MyProfile} options={{headerShown: true}} />

        <Stack.Screen name="SelectedProduct" component={SelectedProduct} options={{headerShown: true,headerTitleAlign:'center',headerTitle:'variants of selected product'}} />

        <Stack.Screen name="Cart" component={Cart} options={{headerShown: true,headerTitleAlign:'center',headerTitle:'Checkout'}} />

        <Stack.Screen name="AppHeader" component={AppHeader} options={{headerShown: false}} />

        <Stack.Screen name="Searching" component={Searching} options={{ header: AppHeader}} />


    </Stack.Navigator>
    </NavigationContainer>
  );  
}
