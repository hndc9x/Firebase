import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LocalNotification,
  NotificationSchedule,
} from '../services/LocalPushNotification';
import RemotePushController from '../services/RemotePushNotification';

/**
 * @author
 * @function HomeScreen
 **/
const HomeScreen = props => {
  const {container} = styles;
  function handleButtonPress() {
    LocalNotification();
  }
  const navigation = useNavigation();
  return (
    <View style={container}>
      <Text>HomeScreen</Text>
      <Button
        title="NotificationV1"
        onPress={() => navigation.navigate('NotificationV1')}
      />
      <Text> </Text>
      <Button title="NotificationV2" onPress={handleButtonPress} />
      <Text> </Text>
      <Button
        title="Notification Schedule"
        onPress={() => NotificationSchedule()}
      />
      <RemotePushController />
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
