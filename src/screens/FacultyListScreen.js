import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const FacultyListScreen = () => {
    var faculty = [
        {name: "Mohayminul Islam", key: "1"},
        {name: "Hasanul Kabir", key: "2"},
        {name: "Ridwan Kabir", key: "3"},
        {name: "Tajkia Rahman", key: "4"},
        {name: "Tasnim Ahmed", key: "5"},
    ];

    return(
        <View style={styles.viewStyle}>
            <FlatList
                style={styles.ListStyle}
                data = {faculty}
                renderItem = { 
                    function({item})
                    {
                        return <Text style = {styles.listtextStyle}> {item.name} </Text>
                    }
                }
            > 
            </FlatList>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        listtextStyle : {
            padding: 4,
            marginLeft: 5,
            textAlign : "left",
            fontSize : 30,
            color : 'midnightblue',
        },
        viewStyle: {
            borderColor: "red",
            borderWidth: 2,
        },
        ListStyle: {},
    }
);

export default FacultyListScreen;