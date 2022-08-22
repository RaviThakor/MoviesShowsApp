import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favourites from '../screens/favourites';
import Dashboard from '../screens/dashboard';
import {Provider} from 'react-redux';
import {Store, persistor} from '../redux/store';
import DetailDescription from '../screens/detaildescription';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Favourites" component={Favourites} />
            <Stack.Screen
              name="DetailDescription"
              component={DetailDescription}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default NavigationStack;
