import React from 'react';
import { View, TextInput } from 'react-native';

class Login extends React.Component{
    render(){
        return(
            <View>
                <TextInput
                    onChangeText={text}
                    value=''
                />
            </View>
        )
    }
}

export default Login;