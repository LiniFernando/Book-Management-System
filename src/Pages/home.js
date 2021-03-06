import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import MyComponent from "../components/table";

export default function Home() {
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToInsertBook() {
        navigation.navigate("InsertBook");
    }

    const image = {uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222-mind-14_1.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f049aca1bc2025a94c4585a86d35d3e1"};

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.login}>
                    <Text>Hi {route.params.name}</Text>
                    <Text>This is your book list</Text>
                    {/*< ExampleFour/>*/}
                    <MyComponent/>
                    <Text style={{color: 'blue'}}
                          onPress={() => navigateToInsertBook()}>
                        Insert Book
                    </Text>
                </View>

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
    },
    submitButtonText: {
        color: 'white',
        textAlign: "center",
    }

});
