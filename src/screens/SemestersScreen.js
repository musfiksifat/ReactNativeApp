import React from 'react';
import { View, StyleSheet, Button} from "react-native";

const firstSemester = [
    {semester : 'First Semester',key: ''},
    {course:'Structured Programming',key: '1'},
    {course:'Technology,Environment and Society',key: '2'},
    {course: 'Geometry and Differential Calculus',key: '3'},
    {course:'Physics',key: '4'},
    {course: 'Introduction to Software Engineering',key: '5'},];
const secondSemester = [
    {semester : 'Second Semester',key: ''},
    {course:'Accounting',key: '1'},
    {course:'Integral Calculus',key: '2'},
    {course:'Discrete Mathematics',key: '3'},
    {course:'Digital Logic Design',key: '4'},
    {course:'Object Oriented Concepts-1',key: '5'},];
const thirdSemester = [
    {semester : 'Third Semester',key: ''},
    {course:'Linear Algebra',key: '1'},
    {course:'Data Structures',key: '2'},
    {course:'Computer Organization and Architecture',key: '3'},
    {course:'Database Management System',key: '4'},
    {course:'Theory of Computing',key: '5'},];

const SemestersScreen =(props)=>{
    
    return (
        <View>
            <Button
                color = "#FF00FE"
                title='1st Semester'
                onPress={
                    function () 
                    { 
                        props.navigation.navigate("CourseList", firstSemester) 
                    }
                }
            />

            <Button
                color = "#E1228C"
                title='2nd Semester' 
                onPress={
                    function () 
                    { 
                        props.navigation.navigate("CourseList", secondSemester ) 
                    }
                }
            />
 
            <Button 
                color = "#FF2323"
                title='3rd Semester'
                onPress={
                    function () 
                    { 
                        props.navigation.navigate("CourseList", thirdSemester ) 
                    }
                }
            />
        </View>
    );
}

const style = StyleSheet.create();

export default SemestersScreen;