import React from 'react';
import { Text, StyleSheet, View , Image, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) =>{
    return(
        <View> 
            <Image
                source = {require('./../../assets/logo_iut.png')} 
                alt = "IUT logo" 
                style = {styles.ImageStyle}
            />
            <Text style={styles.textStyle}> Department of CSE </Text>

            <Text style={styles.textStyle2}> Programme: SWE </Text>

            <TouchableOpacity
                style = {styles.opacityStyle}
                onPress = {
                    function(){
                        props.navigation.navigate("Profile"); 
                    }
                }
            >
                <Text style = { styles.textStyle3 }> My Profile </Text>
            </TouchableOpacity>

            <Button
                color = "#7367F0"
                title = "Semester wise Course List"            
                onPress = {
                    function (){
                        props.navigation.navigate("Semesters");
                    }
                }            
            />
            <Button
                title = "List of Faculty members"     
                onPress = {
                    function (){
                        props.navigation.navigate("FacultyList");
                    }
                }  
            />
        </View>     
    );
}

const styles = StyleSheet.create(
    {
        textStyle : {
            marginBottom: 10,
            textAlign : "center",
            fontSize : 30,
            color :'#B9265D',
        },

        textStyle2 : {
            marginBottom: 20,
            textAlign : "center",
            fontSize : 25,
            color : 'black',
        },

        textStyle3 : {
            fontSize : 25,
            color : 'white',
        },

        opacityStyle : {
            marginBottom: 30,
            alignSelf: 'center',
            backgroundColor : "#00CF91",
        },

        ImageStyle : {
            marginTop: 50,
            marginBottom: 30,
            alignSelf : 'center',  
        },
    }
);

export default HomeScreen;