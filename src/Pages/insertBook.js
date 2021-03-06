import React from 'react';
import {Text, View, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function InsertBook() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate("Home");
    }

    const image = {uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222-mind-14_1.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f049aca1bc2025a94c4585a86d35d3e1"};
    return (

        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.container}>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder="ISBN"
                               placeholderTextColor="#9a73ef"
                               autoCapitalize="none"
                        // onChangeText = {this.handleEmail}
                    />

                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder="Book Name"
                               placeholderTextColor="#9a73ef"
                               autoCapitalize="none"
                        // onChangeText = {this.handlePassword}
                    />
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder="Author"
                               placeholderTextColor="#9a73ef"
                               autoCapitalize="none"
                        // onChangeText = {this.handleEmail}
                    />

                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder="Publisher"
                               placeholderTextColor="#9a73ef"
                               autoCapitalize="none"
                        // onChangeText = {this.handlePassword}
                    />
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigateToHome()}
                >
                    <Text style={styles.addButtonText}> Add</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 100
    },
    addButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 100
    },
    addButtonText: {
        color: 'white',
        textAlign: "center",
    }
})
