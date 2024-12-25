import React from "react";
import {Text,View,Dimensions,FlatList, Touchable, TouchableOpacity} from 'react-native';
import SingleProductComponent from "../SingleProductComponent/SingleProductComponents";
import styles from "./MpcCss"
import Colors from "../../../assets/Colors";
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";

export default function MultipleProductComponent({products,heading,setRefresh,refresh})
{
    const Item = ({product}) =>{
       return <SingleProductComponent setRefresh={setRefresh} refresh={refresh} data={product}/>
    }

    var navigation=useNavigation()
    
    return(
        <View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={styles.titleStyle}>{heading}</Text>
    <TouchableOpacity onPress={()=>{navigation.navigate('Product',{categoryid:products[0].categoryid,categoryname:heading})}}><Text style={{  marginLeft:'auto',alignItems:'flex-end',marginTop:10,fontSize:16,fontWeight:'bold',fontFamily:'Poppins',color:Colors.red,marginRight:12}}>See all<Icon name='caretright' size={15}/></Text></TouchableOpacity>
     </View>
             <FlatList
        data={products}
        //numColumns={2}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Item product={item} />}
        keyExtractor={item => item.id}
          />

        </View>
    )
}