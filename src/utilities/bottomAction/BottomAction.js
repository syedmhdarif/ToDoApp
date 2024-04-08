import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import THEME from '../../theme/Themes';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from '../../service/http/HttpService';

const BottomAction = ({
  valueVisible,
  close,
  deleteData,
  idSelected,
  updateData,
  status,
  item,
}) => {
  //   console.warn('giving item : ', item);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={valueVisible}
      onRequestClose={() => {
        close();
      }}>
      <View style={styles.container}>
        <View style={{flex: 0.3}}>
          <TouchableOpacity onPress={() => close()}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.twoButton}>
          <TouchableOpacity
            // disabled={status}
            style={status ? styles.uncomplete : styles.complete}
            onPress={() => {
              updateData(item, {
                id: item.id,
                title: item.title,
                description: item.description,
                status: !status,
              });
              close();
            }}>
            {status ? (
              <Text style={{color: THEME.colors.white}}> Incomplete </Text>
            ) : (
              <Text style={{color: THEME.colors.dark}}> Complete </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.delete}
            onPress={async () => {
              deleteData(idSelected);
              close();
            }}>
            <Text style={{color: 'red'}}> Delete </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: THEME.colors.white,
    width: THEME.deviceWidth,
    height: THEME.deviceHeight * 0.18,
    paddingHorizontal: 15,
    paddingTop: 10,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    bottom: 0,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  twoButton: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  uncomplete: {
    width: THEME.deviceWidth * 0.42,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.dark,
  },
  complete: {
    width: THEME.deviceWidth * 0.42,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.secondary,
  },
  delete: {
    width: THEME.deviceWidth * 0.42,
    height: 50,
    borderWidth: 0.2,
    borderColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    right: 10,
    padding: 5,
    // backgroundColor: 'red',
  },
});

export default BottomAction;
