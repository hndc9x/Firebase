import PushNotification from 'react-native-push-notification';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
//import {RedirectNotificationV1} from "../actions/Notification";

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    //console.log('LOCAL NOTIFICATION ==>', notification);
    //const navigation = useNavigation();
    Alert.alert('LOCAL NOTIFICATION ==>' + JSON.stringify(notification));
    //RedirectNotificationV1();
  },

  popInitialNotification: true,
  requestPermissions: true,
});

// ham chạy khi người dùng gọi hàm
//bigtext,subtext,vibrate,vibration --> Chỉ dành cho android
export const LocalNotification = () => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    //  actions: '["Yes", "No"]',
  });
};

export const NotificationSchedule = () => {
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    message: 'My Notification Message', // (required)
    date: new Date(Date.now() + 5 * 1000), // in 5 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

    /* Android Only Properties */
    repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
  });
};
