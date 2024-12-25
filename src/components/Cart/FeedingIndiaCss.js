import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex:1,
        width: '95%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection:'row',
        marginVertical:2,
        paddingHorizontal:10,
        paddingVertical:8
    },
    heading:{
        color:'#000',
        fontSize:20,
        fontFamily:'Poppins',
        fontWeight:'bold',
    },
    heading2:{
        color:'#000',
        fontSize:17,
        fontFamily:'Poppins',
        fontWeight:'bold',
    },
    text:{
        paddingLeft:10,
    },
})

export default styles