import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Inputs from '../components/input'

export default function SignUp() {
    const navigation = useNavigation();

    /*function onBackPressed() {
        navigation.goBack()
    }*/

    function navigateToHome() {
        // navigation.navigate("Home", {"name": "Dilini"});
        navigation.navigate("Home", {"name": "Dilini"});

    }


    const image = {uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222-mind-14_1.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f049aca1bc2025a94c4585a86d35d3e1"};

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.login}>
                    <Text style={styles.loginText}>Sign Up</Text>
                    <Inputs/>
                </View>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigateToHome()}
                >
                    <Text style={styles.submitButtonText}> Sign Up </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigateToHome()}
                >
                    <Text style={styles.submitButtonText}> Sign up with Google</Text>
                </TouchableOpacity>
                {/*<Button title="Login"
                        onPress={() => navigateToList()}/>*/}
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    login: {
        textAlign: "center",
    },
    loginText: {
        fontSize: 30,
        color: "#0092dd",
    },
    noAccount: {},
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 100
    },
    submitButtonText: {
        color: 'white',
        textAlign: "center",
    }

});
