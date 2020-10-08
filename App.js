import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/HomeScreen";
import CourseListScreen from "./src/screens/CourseListScreen";
import FacultyListScreen from "./src/screens/FacultyListScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SemestersListScreen from "./src/screens/SemestersScreen";

const stack = createStackNavigator();
function App() 
{
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name = "Home" component = {HomeScreen} />
        <stack.Screen name = "Semesters" component = {SemestersListScreen} />
        <stack.Screen name = "CourseList" component = {CourseListScreen} />
        <stack.Screen name = "FacultyList" component = {FacultyListScreen} />
        <stack.Screen name = "Profile" component = {ProfileScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;