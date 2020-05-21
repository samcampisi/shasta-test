import React, { useState, useEffect } from 'react';
import { StyleProp, ViewStyle, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-easy-icon';
import styles from '../styles/UserInfoItem.style';
import { User } from '../types';
import { animate, enableAnimation } from '../lib/animation';

export interface UserInfoItemProps {
  style?: StyleProp<ViewStyle>;
  testID?: string;
  user: User;
}

const UserInfoItem = (props: UserInfoItemProps) => {
  const { user, style, testID } = props;
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    enableAnimation();
  }, []);

  useEffect(() => {
    animate();
  }, [showDetails]);

  const renderProfilePicture = () => {
    return (
      <View style={styles.profilePictureContainer}>
        <Image
          source={
            user.profilePicture
              ? { uri: user.profilePicture }
              : require('../../assets/img-placeholder.jpg')
          }
          style={styles.profilePicture}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, style]} testID={testID}>
      <View style={styles.horizontal}>
        {renderProfilePicture()}
        <View style={styles.nameContainer}>
          <Text style={styles.text}>
            {user.name} {user.lastName}
          </Text>
        </View>
        {Boolean(user.birthdate || user.country) && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setShowDetails(!showDetails);
            }}>
            <Icon
              name={showDetails ? 'arrow-collapse-vertical' : 'arrow-expand-vertical'}
              type="material-community"
              size={25}
              color={'#666666'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default UserInfoItem;
