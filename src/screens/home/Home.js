// In App.js in a new project

import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from '../../service/http/HttpService';
import THEME from '../../theme/Themes';
import FloatingButton from '../../utilities/button/FloatingButton';
import AddButton from '../../utilities/button/AddButton';
import NavigationService from '../../service/navigation/NavigationService';
import AddNewItemScreen from '../addNewItem/AddNewItem';
import BottomAction from '../../utilities/bottomAction/BottomAction';
import Checkbox from '../../utilities/button/Checkbox';

// import axios from 'axios';

// function HomeScreen() {
//   const [toDoList, setToDoList] = useState(['']);
//   useEffect(async () => {
//     fetchData();
//     return function cleanup() {
//       fetchData();
//     };
//   }, []);

//   const fetchData = async () => {
//     try {
//       const resp = await axios.get('/items');
//       const response = resp.data;
//       setToDoList(response);
//       console.log('get response : ', response.length);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <FlatList
//         data={toDoList}
//         renderItem={({item}) => (
//           <View style={{padding: 10}}>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// }

// export default HomeScreen;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      valueVisible: false,
      bottomValue: false,
      idSelected: 0,
      completed: false,
      itemStatus: false,
      item: [],
      newData: {
        id: 0,
        title: '',
        description: '',
        status: false,
      },
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
    // this.deleteData();
  }

  navigationButton = () => {
    NavigationService.navigate('AddNewItemScreen');
    console.log('navigate');
  };

  fetchData = async () => {
    try {
      await axios
        .get('/items')
        .then(response => this.setState({toDoList: response.data}));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  deleteData = async id => {
    try {
      await axios.delete(`/items/${id}`).then(response => {
        console.log('deleted', response.data);
        response.data;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  updateData = async (item, newData) => {
    try {
      await axios.put(`/items/${item.id}`, newData).then(response => {
        console.log('updated data : ', response.data);
        response.data;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  addItem = async newData => {
    try {
      await axios
        .post('/items', newData)
        .then(response => console.log('response : ', response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  open = () => {
    this.setState({valueVisible: true});
  };

  close = () => {
    this.setState({valueVisible: false});
  };

  openBottomNav = (id, status, item) => {
    // console.warn('id selected : ', id);
    this.setState({
      bottomValue: true,
      idSelected: id,
      itemStatus: status === 0 ? false : true,
      item: item,
    });
  };

  closeBottomNav = () => {
    this.setState({bottomValue: false});
  };

  handleCheckboxPress = () => {
    // Toggle the completion status of the task
    this.setState({completed: !this.state.completed});
    // Call your API to update the completion status
    // updateTaskCompletion(taskId, !completed);
  };

  render() {
    const {toDoList} = this.state;
    console.log('get response from state : ', this.state.toDoList);
    let date = new Date().toDateString();
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{alignItems: 'center', flex: 0.25}}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={{fontSize: 12, color: '#fff'}}>
                Create your own tasks
              </Text>
            </View>
            <View style={styles.header}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text style={styles.headerText}>Today,</Text>
                  <Text style={styles.subHeaderText}> {date} </Text>
                </View>

                <Text style={styles.subHeaderText}>
                  {' '}
                  {toDoList.length} Tasks pending
                </Text>
              </View>
              <View style={{position: 'absolute', right: 0}}>
                <AddButton
                  toDoList={toDoList}
                  navigation={this.props.navigation}
                  open={this.open}
                />
              </View>
            </View>
          </View>

          <View style={styles.flatListContainer}>
            <View style={styles.mytaskContainer}>
              <Text style={styles.mytask}>My Tasks</Text>
            </View>

            <FlatList
              data={toDoList}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.flatlist}
                  onPress={() => {
                    // console.warn('Giving item status : ', item.status);
                    this.openBottomNav(item.id, item.status, item);
                  }}>
                  {item.status === 1 ? (
                    <View style={styles.flatlistComplete} />
                  ) : null}
                  <View style={{paddingHorizontal: 10, elevation: 3}}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.description}>
                        {item.description}{' '}
                      </Text>
                    </View>
                    {item.status === 1 ? (
                      <Text
                        style={{
                          position: 'absolute',
                          color: THEME.colors.white,
                          fontSize: 16,
                          alignSelf: 'center',
                        }}>
                        Completed
                      </Text>
                    ) : null}
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id.toString()}
            />
            <View style={{height: THEME.deviceHeight * 0.03}} />
          </View>
        </View>

        <BottomAction
          valueVisible={this.state.bottomValue}
          close={this.closeBottomNav}
          deleteData={this.deleteData}
          idSelected={this.state.idSelected}
          updateData={this.updateData}
          status={this.state.itemStatus}
          item={this.state.item}
        />

        <AddNewItemScreen
          valueVisible={this.state.valueVisible}
          close={this.close}
          addItem={this.addItem}
          toDoList={this.state.toDoList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.primary,
    height: THEME.deviceHeight * 0.2,
    width: THEME.deviceWidth,
  },
  header: {
    width: THEME.deviceWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 0.2,
  },
  welcomeText: {
    fontSize: 27,
    fontWeight: '500',
    color: THEME.colors.secondary,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '300',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
  },
  flatListContainer: {
    flex: 0.75,
    width: THEME.deviceWidth,
    height: THEME.deviceHeight * 0.72,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff',
    bottom: 0,
  },
  flatlist: {
    width: THEME.deviceWidth * 0.9,
    height: THEME.deviceHeight * 0.1,
    backgroundColor: THEME.colors.sub_primary,
    opacity: 1,
    justifyContent: 'center',
    borderWidth: 0.1,
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 4,
  },
  flatlistComplete: {
    width: THEME.deviceWidth * 0.9,
    height: THEME.deviceHeight * 0.1,
    backgroundColor: THEME.colors.dark,
    opacity: 0.6,
    position: 'absolute',
    justifyContent: 'center',
    borderWidth: 0.1,
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    elevation: 2,
  },
  mytask: {
    fontSize: 18,
    fontWeight: '400',
    color: THEME.colors.dark,
  },
  mytaskContainer: {
    marginTop: 20,
    marginVertical: 5,
    width: THEME.deviceWidth * 0.9,
    height: THEME.deviceHeight * 0.05,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: THEME.colors.dark,
  },
  description: {
    fontSize: 12,
    color: THEME.colors.dark,
  },
});
