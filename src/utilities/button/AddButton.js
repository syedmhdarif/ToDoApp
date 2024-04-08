import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import THEME from '../../theme/Themes';
import axios from '../../service/http/HttpService';
import NavigationService from '../../service/navigation/NavigationService';

const AddButton = ({toDoList, navigation, open}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // navigation.navigate('AddNewItemScreen');
        open();
        console.log('pressed');
      }}>
      <Text style={{fontSize: 12, color: THEME.colors.dark}}>New Task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.secondary,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default AddButton;
