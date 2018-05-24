import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//props로 whenPress라는 props를 받고 TouchableOpacity의 
//onPress에서 사용할 함수로 넘겨주는 과정임

//children은 keyword이기 때문에 children처럼 사용하려면 반드시 
//children이라고 써야 함.
const Button = ({whenPress,children}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            onPress={whenPress}
            style={buttonStyle}>

            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,

    }
}

export default Button;