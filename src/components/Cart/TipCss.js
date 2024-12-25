import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "95%",
        alignSelf: 'center',
        padding: 10,
        borderRadius:15
    },
    content: {
        width: '100%',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#000',
    },
    buttonOne: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: "#000",
        borderWidth: 0.2,
        borderRadius: 5,
        flexDirection: 'row',
    },
    buttonstyling: {
        flexDirection: "row",
    },
})

export default styles