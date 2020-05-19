import { fetchUser, resetUser, setUsername } from '../actions/usersActions';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { AppTabParamList } from '../App';
import { User } from '../types';
import styles from '../styles/Home.style';
import Button from '../components/Button';

export interface HomeProps {
  fetchUser: typeof fetchUser;
  resetUser: typeof resetUser;
  setUsername: typeof setUsername;
  user: User;
  username: string;
  navigation: BottomTabNavigationProp<AppTabParamList, 'Home'>;
  route: RouteProp<AppTabParamList, 'Home'>;
}

interface HomeState {
  username: string;
  inputFocused: boolean;
}

export class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      username: '',
      inputFocused: false,
    };
  }

  onChangeText = (text: string) => {
    this.setState({ username: text });
  };

  onInputFocus = () => {
    this.setState({ inputFocused: true });
  };

  onInputBlur = () => {
    this.setState({ inputFocused: false });
  };

  onButtonPress = () => {
    this.props.setUsername(this.state.username);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome{this.props.username ? `, ${this.props.username}` : ''}!
        </Text>
        {!this.props.username && (
          <View>
            <Text style={styles.instructions}>Please set your username below:</Text>
            <TextInput
              style={[styles.input, this.state.inputFocused && styles.inputFocused]}
              onChangeText={this.onChangeText}
              value={this.state.username}
              placeholder="paquita-salas"
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur}
            />
            <Button
              onPress={this.onButtonPress}
              title="Continue"
              disabled={!this.state.username.length}
            />
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            this.props.resetUser();
          }}>
          <Text>Reset user</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.users.user,
  username: state.users.username,
});

const mapDispatchToProps = {
  fetchUser,
  resetUser,
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
