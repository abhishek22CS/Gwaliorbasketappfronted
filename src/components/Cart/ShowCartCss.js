import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: "96%",
        height:'auto',
        alignSelf: 'center',
        marginBottom:2,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        backgroundColor: "#fff",
        paddingLeft:8,
        paddingTop:10
    },
    pricing: {
        width: "40%",
        justifyContent: 'center',
        paddingLeft:15
    },
    productimage: {
        resizeMode:'contain',
        width: 85,
        height: 75,
        alignSelf: "center",
    },
    productname: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    prices: {
        fontSize: 13,
        fontWeight:450,
        color: '#000'
    },
    
    imagestyling:{
        backgroundColor:'#fff',
        borderWidth:0.15,
        flex:1,
        borderColor:"#000",
        borderRadius:3,
        padding:2,
        marginLeft:2,
        alignSelf:'center',
    },
})

export default styles