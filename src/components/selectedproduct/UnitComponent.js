import { Text, View, Dimensions,ScrollView, TouchableOpacity } from "react-native";
import Colors from "../../../assets/Colors";
import { postData } from "../../services/ServerServices";
import { useEffect,useState } from "react";

const { width, height } = Dimensions.get('window')

export default function UnitComponent({product,setProduct}) {

    const[unit,setUnits]=useState([])
    const[selectedProduct,setSelectedProduct]=useState(product)

    const fetchAllProduct=async()=>{
        var result=await postData('userinterface/fetch_producttolistproducts',{productid:product.productid})
        setUnits(result.data)
     }
 
     useEffect(()=>{
         fetchAllProduct()
     },[])

     const handleSelectedProduct=(item)=>{
        setSelectedProduct(item)
        setProduct(item)
     }

    const unitProduct = () => {
        return unit.map((item) => {
            return (<View>
                <TouchableOpacity onPress={()=>handleSelectedProduct(item)}>
                <View style={{ borderWidth:item.listproductid==selectedProduct.listproductid?2.5:0.8, borderColor:item.listproductid==selectedProduct.listproductid?Colors.skyBlue:Colors.darkGrey, width: width * 0.28, height: height * 0.1, margin:5, borderRadius: 10, color: 'black', justifyContent: "center", alignItems: 'center',marginTop:20}} >
                    <View >
                        <View style={{marginTop: -25,backgroundColor:Colors.skyBlue,borderRadius:10}} >
                            <Text style={{ fontSize: 14, color: 'white', marginVertical:5,marginHorizontal:10,fontWeight:600 }} >
                                {parseInt((item.price-item.offerprice)/item.price*100)}% OFF
                            </Text>

                        </View>
                    </View>
                    <View style={{paddingTop:5}} >
                        <Text style={{fontWeight:500}} >
                            {item.weight} {item.pricetype}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 7, fontWeight: 600 }} >
                            &#8377;{item.offerprice}
                        </Text>
                        <Text style={{ paddingVertical: 2.5, textDecorationLine: 'line-through',color:Colors.red }} >
                            &#8377;{item.price}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>)
        })
    }

    return (<View style={{marginHorizontal:10,marginVertical:8}} >
        <Text style={{fontWeight:600}} >Select Unit</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {unitProduct()}
        </ScrollView>

    </View>)
}