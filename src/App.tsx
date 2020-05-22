import Home from './containers/Home';
import UserDataList from './containers/UserDataList';
import UserDataPersonal from './containers/UserDataPersonal';
import Logout from './containers/Logout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-easy-icon';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { Alert } from 'react-native';
import NavigationService from './lib/NavigationService';
import { resetUser } from './actions/usersActions';

const Tab = createBottomTabNavigator();

export type AppTabParamList = {
  Home: undefined;
  UserDataList: { userID?: string };
  UserDataPersonal: undefined;
};

const App = () => {
  const username = useSelector((state: any) => state.users.username);
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const onLogout = () => {
    dispatch(resetUser());
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff66a4',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'User Data List') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'account-arrow-right' : 'account-arrow-right-outline';
          } else if (route.name === 'User Data Personal') {
            iconName = focused ? 'account-plus' : 'account-plus-outline';
          }

          return <Icon name={iconName} type="material-community" size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User Data List" component={UserDataList} />
      <Tab.Screen name="User Data Personal" component={UserDataPersonal} />
      <Tab.Screen
        name="Logout"
        component={Logout}
        listeners={{
          tabPress: (e) => {
            // Don't navigate until we confirm the logout
            e.preventDefault();
            // Don't ask the user to log out if they're not logged in
            if (username) {
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
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
