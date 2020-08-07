import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import {TouchableOpacity, Alert} from 'react-native';
export default class HeaderScreen extends Component {
    render() {
        return (
            < Header >
                {/* < TouchableOpacity > */}
                    <Left>
                        <Button  >
                            <Icon  onPress={()=>this.props.navigation.navigate('DrawerOpen ')}
                             name='md-menu' size={40} color='black' />
                        </Button>
                    </Left>
                {/* </TouchableOpacity > */}
                <Body>
                    <Title>this is header </Title>
                    {/* git+https://git@github.com/react-native-community/react-native-camera.git */}
                </Body>
                <Right />

            </Header >

        );
    }
}
