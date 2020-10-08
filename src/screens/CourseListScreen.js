import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const CourseListScreen = (props) => {
    return(
        <View>
            <FlatList
                style={styles.ListStyle}
                data = {props.route.params}
                renderItem = { 
                    function(item)
                    {
                        return(
                            <View>
                                <View> 
                                    <Text style={styles.textStyle}> {item.item.semester} </Text>
                                </View>

                                <View> 
                                    <Text style = {styles.listtextStyle}> {item.item.course} </Text>
                                </View> 
                            </View>                                    
                        );
                    }
                }
            > 
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle : {
            textAlign : "center",
            fontSize : 30,
            color : '#B9265D',
        },
        listtextStyle : {
            marginLeft: 5,
            textAlign : "left",
            fontSize : 26,
            backgroundColor: 'white',
            color : 'midnightblue',
        },
        ListStyle: {},
    }   
);

export default CourseListScreen;