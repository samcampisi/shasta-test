import { saveUser } from '../actions/usersActions';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import moment from 'moment';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker from 'react-native-country-picker-modal';
import { AppTabParamList } from '../App';
import styles, { sheetStyles } from '../styles/UserDataPersonal.style';
import Button from '../components/Button';
import { animate, enableAnimation } from '../lib/animation';
import { openCamera, openPicker } from '../lib/PickerManager';
import CustomTextInput from '../components/CustomTextInput';
import NavigationService from '../lib/NavigationService';

export interface UserDataPersonalProps {
  username: string;
  navigation: BottomTabNavigationProp<AppTabParamList, 'UserDataPersonal'>;
  route: RouteProp<AppTabParamList, 'UserDataPersonal'>;
}

const blankUser = {
  name: '',
  lastName: '',
  birthdate: new Date('1988-09-30T12:00:00-06:30'),
  profilePicture: undefined,
  country: {
    cca2: 'ES',
    region: 'Europe',
    subregion: 'Southern Europe',
    name: 'Spain',
    currency: ['EUR'],
    callingCode: ['34'],
    flag: 'flag-es',
  },
};

const UserDataPersonal = () => {
  const [user, setUser] = useState(blankUser);
  const [showDatepicker, setShowDatePicker] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const dispatch = useDispatch();
  let actionSheet: any;

  useEffect(() => {
    enableAnimation();
  }, []);

  useEffect(() => {
    animate();
  }, [user.birthdate, user.country, showDatepicker]);

  const onImagePress = () => {
    actionSheet.show();
  };

  const openPickerCamera = () => {
    openCamera().then((image: any) => {
      setUser({ ...user, profilePicture: image.path });
    });
  };

  const openPickerPicker = () => {
    openPicker().then((image: any) => {
      setUser({ ...user, profilePicture: image.path });
    });
  };

  const onSelectCountry = (country: any) => {
    setUser({ ...user, country });
    setShowCountryPicker(false);
  };

  const onUserSave = () => {
    dispatch(saveUser(user));
    setUser(blankUser);
    NavigationService.navigate('Settings');
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

  const renderProfilePicture = () => {
    return (
      <TouchableOpacity onPress={onImagePress}>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, !user.profilePicture && styles.opaque]}
            source={
              user.profilePicture
                ? {
                    uri: user.profilePicture,
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
    );
  };

  const renderDateButton = () => {
    return (
      <View style={[styles.horizontal, styles.centerItems]}>
        <Text style={styles.label}>Birth date:</Text>

        <Button
          onPress={() => {
            setShowDatePicker(!showDatepicker);
          }}
          icon={require('../../assets/ic_calendar.png')}
          title={moment(user.birthdate).format('L')}
          style={[styles.button, styles.customButton, showDatepicker && styles.inputFocused]}
          textStyle={styles.buttonText}
          imageStyle={styles.buttonImage}
        />
      </View>
    );
  };

  const renderCountryPicker = () => {
    return (
      <View style={[styles.horizontal, styles.centerItems]}>
        <Text style={styles.label}>Country:</Text>
        <CountryPicker
          {...{
            countryCode: user.country.cca2,
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
            withFlagButton: true,
            onSelect: onSelectCountry,
            // Style won't apply if it's not inline
            containerButtonStyle: {
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderColor: '#222222',
              minHeight: 40,
              justifyContent: 'center',
              paddingHorizontal: 15,
              borderRadius: 20,
            },
          }}
          visible={showCountryPicker}
        />
      </View>
    );
  };

  const renderDatePicker = () => {
    return (
      <View style={[styles.horizontal]}>
        {showDatepicker && (
          <DateTimePicker
            style={styles.fullWidth}
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={user.birthdate}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(Platform.OS === 'ios');
              setUser({ ...user, birthdate: date || user.birthdate });
            }}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderActionSheet()}
      <Text style={styles.title}>Add New User Data</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.fullWidth]}>
          {renderProfilePicture()}
          <View style={[styles.topSpacing]}>
            <CustomTextInput
              label="Name (*)"
              onChangeText={(text: string) => {
                setUser({ ...user, name: text });
              }}
              value={user.name}
              placeholder="Paquita"
              style={[{ flex: undefined }]}
              horizontal
            />
            <CustomTextInput
              label="Last Name (*)"
              onChangeText={(text: string) => {
                setUser({ ...user, lastName: text });
              }}
              value={user.lastName}
              placeholder="Salas"
              style={[{ flex: undefined }]}
              horizontal
            />
            {renderDateButton()}
            {renderDatePicker()}
            {renderCountryPicker()}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button
        onPress={onUserSave}
        title="Save User"
        disabled={!user.name.length || !user.lastName.length}
        style={styles.mainButton}
      />
    </SafeAreaView>
  );
};

export default UserDataPersonal;
