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

const AddNewItemScreen = ({
  navigaton,
  valueVisible,
  close,
  addItem,
  toDoList,
}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const onChange = (value, variable) => {};
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={valueVisible}
      onRequestClose={() => {
        close();
      }}>
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Add New Item</Text>
            <TouchableOpacity onPress={() => close()}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            maxLength={40}
            placeholder="Please enter the Title"
            onChangeText={text => {
              setTitle(text);
            }}
            style={{
              width: THEME.deviceWidth * 0.8,
              height: THEME.deviceWidth * 0.1,
              borderBottomWidth: 0.2,
              paddingHorizontal: 10,
            }}
            value={toDoList.title}
          />

          <View
            style={{backgroundColor: THEME.colors.light, marginVertical: 20}}>
            <TextInput
              editable
              multiline
              numberOfLines={5}
              maxLength={100}
              placeholder="Please enter the Description"
              onChangeText={text => {
                setDescription(text);
              }}
              style={{
                width: THEME.deviceWidth * 0.8,
                height: THEME.deviceWidth * 0.6,
                marginVertical: 5,
                fontSize: 14,
                paddingHorizontal: 10,
                alignSelf: 'flex-start',
              }}
              value={toDoList.desc}
            />
          </View>

          <TouchableOpacity
            // disabled={status}
            style={styles.createTask}
            onPress={() => {
              let newData = {
                id: toDoList.length + 1,
                title: title,
                description: description,
                status: false,
              };
              addItem(newData);
              close();
            }}>
            <Text style={{color: THEME.colors.dark}}> Create </Text>
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 25,
  },
  createTask: {
    width: THEME.deviceWidth * 0.8,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.secondary,
  },
});

export default AddNewItemScreen;
