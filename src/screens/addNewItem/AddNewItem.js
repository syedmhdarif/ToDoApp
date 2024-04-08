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
  item,
  idSelected,
  status,
  updateData,
  deleteData,
}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [items, setItem] = React.useState([null]);
  const onChange = (value, variable) => {};

  React.useEffect(() => {
    // if (item) {
    //   setTitle(item.title);
    //   setDescription(item.description);
    // }
  }, [item]);

  // const cleanup = () => {
  //   setItem([null]);
  // };

  const randomId = () => {
    const random = '123456789';
    let key = 0;
    for (let i = 0; i < 32; i += 1) {
      key += Math.floor(Math.random() * random.length);
    }

    return key;
  };

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
            <Text> {item ? 'Edit existing task' : 'Add New Task'} </Text>
            <TouchableOpacity
              onPress={() => {
                // cleanup();
                close();
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            maxLength={40}
            placeholder={item ? item.title : 'Please enter the Title'}
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
              placeholder={
                item ? item.description : 'Please enter the Description'
              }
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
              value={toDoList.description}
            />
          </View>

          {item ? (
            <TouchableOpacity
              // disabled={status}
              style={status ? styles.incomplete : styles.complete}
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
                <Text style={{color: THEME.colors.white}}> Complete </Text>
              )}
            </TouchableOpacity>
          ) : null}

          <TouchableOpacity
            // disabled={status}
            style={item ? styles.update : styles.createTask}
            onPress={async () => {
              let newData = {
                id: item ? item.id : randomId(),
                title: item ? (title != '' ? title : item.title) : title,
                description: item
                  ? description != ''
                    ? description
                    : item.description
                  : description,
                status: item
                  ? item.status === 0
                    ? false
                    : item.status === 1
                    ? true
                    : false
                  : false,
              };

              if (item) {
                await updateData(item, newData);
              } else {
                await addItem(newData);
              }

              close();
            }}>
            <Text style={{color: THEME.colors.dark}}>
              {' '}
              {item ? 'Update' : 'Create'}{' '}
            </Text>
          </TouchableOpacity>

          {item ? (
            <TouchableOpacity
              style={styles.delete}
              onPress={async () => {
                deleteData(idSelected);
                close();
              }}>
              <Text style={{color: 'red'}}> Delete </Text>
            </TouchableOpacity>
          ) : null}
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
    marginVertical: 3,
  },
  incomplete: {
    width: THEME.deviceWidth * 0.8,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.dark,
    marginVertical: 3,
  },
  complete: {
    width: THEME.deviceWidth * 0.8,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.dark,
    marginVertical: 3,
  },
  delete: {
    width: THEME.deviceWidth * 0.8,
    height: 50,
    // borderWidth: 0.2,
    // borderColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  update: {
    width: THEME.deviceWidth * 0.8,
    height: 50,
    borderWidth: 0.5,
    borderColor: THEME.colors.dark,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
});

export default AddNewItemScreen;
