import React from 'react';
import Home from '../screen/Home';
import Login from '../screen/Login';
import { Router, Stack, Scene } from 'react-native-router-flux';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Stack key='root' >
                    <Scene key='login' component={Login} hideNavBar={true} />
                    <Scene key='Home' component={Home} hideNavBar={true} />
                </Stack>
            </Router>
        )
    }
}

export default Routes;