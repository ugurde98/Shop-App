import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useAuth0, Auth0Provider} from 'react-native-auth0';


const LoginButton = () => {
    const {authorize} = useAuth0();
    const onPress = async () => {
        try {
            await authorize({scope: 'openid profile email'}, {customScheme: 'shop'});
        } catch (e) {
            console.log(e);
        }
    };
  return <Button onPress={onPress} title="Click Login or Register" />
}

export default LoginButton

const styles = StyleSheet.create({})