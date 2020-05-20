import { setUsername } from '../actions/usersActions';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import { AppTabParamList } from '../App';
import styles, { sheetStyles } from '../styles/UserDataPersonal.style';
import Button from '../components/Button';
import { animate, enableAnimation } from '../lib/animation';
import { openCamera, openPicker } from '../lib/PickerManager';

export interface UserDataPersonalProps {
  username: string;
  navigation: BottomTabNavigationProp<AppTabParamList, 'UserDataPersonal'>;
  route: RouteProp<AppTabParamList, 'UserDataPersonal'>;
}

const UserDataPersonal = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();
  let actionSheet: any;

  useEffect(() => {
    enableAnimation();
  }, []);

  const onImagePress = () => {
    actionSheet.show();
  };

  const openPickerCamera = () => {
    openCamera().then((image: any) => {
      setImgSrc(image.path);
    });
  };

  const openPickerPicker = () => {
    openPicker().then((image: any) => {
      setImgSrc(image.path);
    });
  };

  const renderActionSheet = () => {
    const options = ['Take photo', 'Choose from gallery', 'Cancel'];

    return (
      <ActionSheet
        ref={(o: any) => {
          actionSheet = o;
        }}
        title="Add New Image"
        options={options}
        cancelButtonIndex={options.length - 1}
        onPress={(index: number) => {
          if (index === 0) {
            setTimeout(() => {
              openPickerCamera();
            }, 10);
          } else if (index === 1) {
            setTimeout(() => {
              openPickerPicker();
            }, 10);
          }
        }}
        styles={sheetStyles}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderActionSheet()}
      <Text style={styles.title}>Add New User Data</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={onImagePress}>
        <View>
          <Image
            style={[styles.image, !imgSrc && styles.opaque]}
            source={
              imgSrc
                ? {
                    uri: imgSrc,
                  }
                : require('../../assets/img-placeholder.jpg')
            }
          />
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/ic_camera.png')}
              style={styles.imageIcon}
              testID="update-avatar-image"
            />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserDataPersonal;
