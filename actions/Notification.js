import {useNavigation} from '@react-navigation/native';

export const RedirectNotificationV1 = () => {
  const navigation = useNavigation();
  return navigation.navigate('NotificationV1');
};
