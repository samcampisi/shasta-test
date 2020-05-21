import React, { useState } from 'react';
import { StyleProp, ViewStyle, Text, View, TextInput } from 'react-native';
import styles from '../styles/CustomTextInput.style';

export interface CustomTextInputProps {
  label: string;
  horizontal?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | undefined;
}

const CustomTextInput = (props: CustomTextInputProps) => {
  const {
    label,
    horizontal,
    style,
    testID,
    value,
    onChangeText,
    placeholder,
    autoCapitalize,
  } = props;
  const [inputFocused, setInputFocused] = useState(false);

  const onInputFocus = () => {
    setInputFocused(true);
  };

  const onInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <View style={[styles.container, horizontal && styles.horizontal, style]} testID={testID}>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, inputFocused && styles.inputFocused]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
    </View>
  );
};

export default CustomTextInput;
