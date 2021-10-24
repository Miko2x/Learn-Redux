import React from 'react';
import { View, TextInput } from 'react-native';

class Login extends React.Component{
    render(){
        return(
            <View>
      
            <View>
                <TextInput
                    onChangeText={text}
                    value=''
                />
            </View>
    <View>
                <TextInput
                    onChangeText={text}
                    value=''
                />
            </View>
         
            </View>
        )
    }
}

export default Login;
