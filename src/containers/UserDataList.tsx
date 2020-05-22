import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, View, FlatList, ListRenderItemInfo, SafeAreaView } from 'react-native';
import Icon from 'react-native-easy-icon';
import { AppTabParamList } from '../App';
import styles from '../styles/UserDataList.style';
import { animate, enableAnimation } from '../lib/animation';
import NavigationService from '../lib/NavigationService';
import { User } from '../types';
import UserInfoItem from '../components/UserInfoItem';

export interface UserDataListProps {
  username: string;
  navigation: BottomTabNavigationProp<AppTabParamList, 'UserDataList'>;
  route: RouteProp<AppTabParamList, 'UserDataList'>;
}

const UserDataList = () => {
  const users = useSelector((state: any) => state.users.users);

  useEffect(() => {
    enableAnimation();
  }, []);

  useEffect(() => {
    animate();
  }, [users]);

  const goToUserDataPersonal = () => {
    NavigationService.navigate('User Data Personal');
  };

  const extractKey = (item: User) => item.id || 'default';

  const renderEmptyState = () => {
    return (
      <View style={styles.emptyStateContainer}>
        <Icon
          name={'account-search-outline'}
          type="material-community"
          size={150}
          color={'#CCCCCC'}
        />
        <Text style={styles.emptyStateTitle}>Oops!</Text>
        <Text style={styles.emptyStateDescription}>
          There aren't any users saved yet. You can create one by going to the{' '}
          <Text style={styles.emptyStateHighlight} onPress={goToUserDataPersonal}>
            User Data Personal
          </Text>{' '}
          screen
        </Text>
      </View>
    );
  };

  const renderListItem = (info: ListRenderItemInfo<User>) => {
    return (
      <UserInfoItem
        testID={`user-item-${info.item.id}`}
        user={info.item}
        style={info.index % 2 === 0 && styles.alternativeItem}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderHeader = () => {
    return (
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>All saved users</Text>
      </SafeAreaView>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={users}
        renderItem={renderListItem}
        keyExtractor={extractKey}
        removeClippedSubviews
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
      />
    );
  };

  return <View style={styles.container}>{users.length ? renderList() : renderEmptyState()}</View>;
};

export default UserDataList;
