import { LayoutAnimation } from 'react-native';
import { UIManager } from 'react-native';

const CONFIG = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

export function enableAnimation() {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function animate() {
  LayoutAnimation.configureNext(CONFIG);
}
