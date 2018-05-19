//import libraried for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component

const styles = {
    viewStyle:{
      backgroundColor:'#F8F8F8'  
    },
    textStyle: {
        fontSize: 20
    }
};
const Header = () => {
    const { textStyle ,viewStyle} = styles;
    return (
        <View style = {viewStyle}>
            <Text style={textStyle}>Albums!</Text>;
        </View>
    );

};




//make th ecomponent available to other part of the app
export default Header;
