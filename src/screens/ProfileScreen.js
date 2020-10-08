import React from 'react';
import { Text, StyleSheet, View , Image, Button, TouchableOpacity} from "react-native";

const ProfileScreen = (props) =>{
    return(
        <View> 
            <Image
                source = {require('./../../assets/picture.png')} 
                alt = "Student picture" 
                style = {styles.ImageStyle}
            />

            <View style = {styles.BolckStyle}> 

                <Text style={styles.textStyle}> Name: Musfik  </Text>
                <Text style={styles.textStyle}> Student Id: 170042088 </Text>
                <Text style={styles.textStyle}> Semester : 6th semester </Text>
                <Text style={styles.textStyle}> Programme: SWE </Text>

            </View>
        </View>     
    );
}

const styles = StyleSheet.create(
    {
        textStyle : {
            marginBottom: 4,
            marginTop: 4,
            textAlign : "left",
            paddingLeft:10,
            fontSize : 25,
            color :'black',
        },

        BolckStyle : {
            marginTop: 15,
            marginLeft: 10,
            marginRight: 10,
            color : 'white',
        },

        ImageStyle : {
            marginTop: 20,
            marginBottom: 30,
            alignSelf : 'center',  
        },
    }
);

export default ProfileScreen;