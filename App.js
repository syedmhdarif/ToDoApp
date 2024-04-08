// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/Home';
import AddNewItemScreen from './src/screens/addNewItem/AddNewItem';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import THEME from './src/theme/Themes';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.colors.primary, // Customize the background color here
          },
          headerTintColor: '#fff', // Customize the text color
          headerTitleStyle: {
            fontWeight: 'bold',
            opacity: 1.0,
          },
        }}
        // drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="To-Do">
        <Stack.Screen name="To-Do" component={HomeScreen} />
        <Stack.Screen name="AddNewItemScreen" component={AddNewItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
