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

function FloatingButton() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: THEME.colors.secondary,
    borderRadius: 35,
    position: 'absolute',
    bottom: 30,
    right: 20,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default FloatingButton;
