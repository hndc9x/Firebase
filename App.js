import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import HomeScreen from './screens/Home';
import NotificationV1 from './screens/NotificationV1';

/**
 * @author
 * @function App
 **/

const Stack = createStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NotificationV1" component={NotificationV1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
