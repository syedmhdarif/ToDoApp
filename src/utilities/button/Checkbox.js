import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // or any other icon library

const Checkbox = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome
          name={checked ? 'clear' : 'check-square-o'}
          size={24}
          color="black"
        />
        <Text style={{marginLeft: 8}}>Mark as complete</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
