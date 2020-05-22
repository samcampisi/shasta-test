import React, { useState, useEffect } from 'react';
import { StyleProp, ViewStyle, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-easy-icon';
import emoji from 'node-emoji';
import moment from 'moment';
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

  const onShowDetailPress = () => {
    setShowDetails(!showDetails);
  };

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

  const renderDetails = () => {
    return (
      <View style={[styles.horizontal, styles.bottomContainer]}>
        <View style={styles.bottomItem}>
          <Image source={require('../../assets/ic_birthday.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>{moment(user.birthdate).format('L')}</Text>
        </View>
        <View style={styles.bottomItem}>
          <Image source={require('../../assets/ic_location.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>
            {emoji.get(user.country?.flag)} {user.country?.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, style]} testID={testID}>
      <TouchableOpacity style={styles.fill} onPress={onShowDetailPress}>
        <View style={styles.horizontal}>
          {renderProfilePicture()}
          <View style={styles.nameContainer}>
            <Text style={styles.text}>
              {user.name} {user.lastName}
            </Text>
          </View>
          {Boolean(user.birthdate || user.country) && (
            <TouchableOpacity style={styles.iconContainer} onPress={onShowDetailPress}>
              <Icon
                name={showDetails ? 'arrow-collapse-vertical' : 'arrow-expand-vertical'}
                type="material-community"
                size={25}
                color={'#ff66a4'}
              />
            </TouchableOpacity>
          )}
        </View>
        {showDetails && renderDetails()}
      </TouchableOpacity>
    </View>
  );
};

export default UserInfoItem;
