import {StyleSheet} from "react-native"
import Colors from "../../../assets/Colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        alignSelf: 'center',
        width:'95%',
        backgroundColor:'#fff',
        borderRadius:15,
    },
    firstboxrow: {
        backgroundColor: '#fff',
        width: '85%',
        height: '90%',
        border:1,
        borderWidth:.2,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius:5,
        borderColor: '#8e8e8e',
        padding:5,
        marginVertical:5,
    },
    heading:{
        color:'#000',
        fontSize:18,
        fontFamily:'Poppins',
        fontWeight:700,
        alignSelf:'flex-start',
        paddingLeft:10
    },

   
    boxtext: {
        fontSize: 18,
        color:Colors.darkGreen,
        paddingLeft:10,
    },
    firstrow:{
        flexDirection:'row',
        paddingTop:5,
        alignSelf:'center',
        alignItems:'center'
    },
    lastrow:{
        marginTop:20,
        textAlign:'center',
        fontSize:15
    }

})

export default styles