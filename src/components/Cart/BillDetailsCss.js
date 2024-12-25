import {StyleSheet} from "react-native"
import Colors from "../../../assets/Colors"

const styles = StyleSheet.create({
    Container: {
        flex:1,
        width: "95%",
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginVertical:5,
        borderRadius:15,
        marginBottom:7
    },
    Content: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        marginVertical:7
    },
    rowCenter:{
        flexDirection:'row',
        alignSelf:'center'
    },
    price: {
        textDecorationLine: 'line-through',
        fontSize:14,
        color:Colors.red,
        marginRight:5,
        alignSelf:'center',
    },
    price2: {
        fontSize:16,
        alignSelf:'center',
        fontWeight:500
    },
    price3: {
        fontSize:16,
        alignSelf:'center',
        fontWeight:500,
        color:Colors.darkGreen
    },
    heading: {
        fontSize: 20,
        textDecorationLine:'underline line',
        fontWeight: 'bold',
        fontFamily:'poppins',
        color: '#000'
    },
    icontxt:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
       
    },
    iconstyling:{
        marginHorizontal:5,
        fontSize:25
    },
    txt:{
        fontSize:16,
        fontWeight:450
    },
    grandTotal:{
        fontWeight:"bold",
        fontSize:18,
        marginLeft:6,
        color:"#000",
    },
    gtprice:{
        fontWeight:"bold",
        color:"#000",
        marginLeft:'auto',
        fontSize:16
    },
    save:{
        marginLeft:4,
        width:75,
        alignItems:'center',
        backgroundColor:Colors.skyBlue
    },
        gttxt:{
        color:"#fff",
        fontWeight:400,
        letterSpacing:1,
        fontSize:11
    },
})

export default styles