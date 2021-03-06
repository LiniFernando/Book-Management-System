import React from 'react';
import { Text, View, Button } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';


export default function InsertBook() {
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToDashboard() {
        navigation.navigate("Home");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.name}</Text>
            <Button title="Open Dashboard"
                    onPress= {()=>navigateToDashboard()}
            />
        </View>
    );
}
