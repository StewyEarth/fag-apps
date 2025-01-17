import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function App() {
  let andeby = [
    { id: 1, name: 'Anders And' },
    { id: 2, name: 'Mickey Mouse' },
    { id: 3, name: 'Fedtmule' }
  ]
  const aender = andeby.map((and) =>
    <Text>{and.name}</Text>
  );
  return (
    <View style={styles.container}>

      <Input
        placeholder='Username...'
        leftIcon={{ type: 'font-awesome', name: 'user', }}
        leftIconContainerStyle={{ marginRight: "1em" }}
      />
      <Input
        placeholder='Password...'
        leftIcon={{ type: 'font-awesome', name: 'lock', }}
        leftIconContainerStyle={{ marginRight: "1em" }}
        secureTextEntry={true}
      />
      <Button style={{ marginTop: "2em" }}
        containerStyle={{ width: "80%" }}
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title="Login"
      />
      {aender}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
