import React, {Component} from 'react';
import { Text, SafeAreaView, Image } from 'react-native';


export default class Comunication extends Component {
    render() {
        return(
            <SafeAreaView>
                <Image style={{width: 50, height: 50}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                <Text>
                    Test de Comunication
                </Text>
                <Text>
                    teste de texto do Comunicado
                </Text>
            </SafeAreaView>
        );
    }
};