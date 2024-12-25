import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  mainCon: {
    backgroundColor: '#fff',
    width: '95%',
    elevation: 2,
    borderRadius: 4,
    justifyContent: 'center',
    margin: 5,
    marginVertical:10,
    height:100
  },
  img: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    
  },
  txtView: {
    width: '50%',
    marginLeft: 15,
  },

  name: {
    fontSize: 14,
  },
  con: {
    fontSize: 12,
  },
  qty: {
    fontSize: 10,
  },

  btn: {
    width: '30%',
     alignSelf:'center',
     marginLeft:10,
    },
lastCon:{
    backgroundColor: '#fff',
    width: '100%',
    height: height *1,
    borderRadius: 4,
    
    
  },
  view1:{flexDirection: 'row'},
  view2:{alignSelf:'center' }



});
