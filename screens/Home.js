import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

/**
 * @author
 * @function HomeScreen
 **/
const HomeScreen = props => {
  const {container} = styles;
  const navigation = useNavigation();
  return (
    <View style={container}>
      <Text>HomeScreen</Text>
      <Button
        title="NotificationV1"
        onPress={() => navigation.navigate('NotificationV1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
