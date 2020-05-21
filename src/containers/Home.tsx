import { setUsername } from '../actions/usersActions';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { AppTabParamList } from '../App';
import styles from '../styles/Home.style';
import Button from '../components/Button';
import CustomTextInput from '../components/CustomTextInput';
import { animate, enableAnimation } from '../lib/animation';

export interface HomeProps {
  username: string;
  navigation: BottomTabNavigationProp<AppTabParamList, 'Home'>;
  route: RouteProp<AppTabParamList, 'Home'>;
}

const Home = () => {
  const [userName, setUserName] = useState('');
  const username = useSelector((state: any) => state.users.username);
  const dispatch = useDispatch();

  useEffect(() => {
    enableAnimation();
  }, []);

  useEffect(() => {
    animate();
  }, [username]);

  const onChangeText = (text: string) => {
    setUserName(text);
  };

  const onButtonPress = () => {
    dispatch(setUsername(userName));
    setUserName('');
    animate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome{username ? `, ${username}` : ''}!</Text>
      {!username && (
        <View>
          <CustomTextInput
            label="Please enter your username below:"
            onChangeText={onChangeText}
            value={userName}
            placeholder="paquita-salas"
            autoCapitalize="none"
            style={styles.input}
          />
          <Button
            onPress={onButtonPress}
            title="Continue"
            disabled={!userName.length}
            testID="continue-button"
          />
        </View>
      )}
    </View>
  );
};

export default Home;
