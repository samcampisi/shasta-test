import Home from './containers/Home';
import Settings from './containers/Settings';
import Logout from './containers/Logout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-easy-icon';
import 'react-native-gesture-handler';
import { Alert } from 'react-native';
import NavigationService from './lib/NavigationService';
import { resetUser } from './actions/usersActions';

const Tab = createBottomTabNavigator();

export type AppTabParamList = {
  Home: undefined;
  Settings: { userID?: string };
};

const App = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(resetUser());
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'account-arrow-right' : 'account-arrow-right-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} type="material-community" size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen
        name="Logout"
        component={Logout}
        listeners={{
          tabPress: (e) => {
            // Don't navigate until we confirm the logout
            e.preventDefault();
            Alert.alert('Log out', 'Are you sure you want to log out?', [
              {
                text: 'Cancel',
              },
              {
                text: 'Log out',
                style: 'destructive',
                onPress: () => {
                  onLogout();
                  NavigationService.navigate('Home');
                },
              },
            ]);
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
