import React from 'react';
import { StyleProp, ViewStyle, Text, TextStyle, SafeAreaView } from 'react-native';
import styles from '../styles/Header.style';

export interface HeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
}

const Header = (props: HeaderProps) => {
  const { title, style, textStyle, testID } = props;

  return (
    <SafeAreaView testID={testID} style={[styles.header, style]}>
      <Text style={[styles.headerText, textStyle]}>{title}</Text>
    </SafeAreaView>
  );
};

export default Header;
