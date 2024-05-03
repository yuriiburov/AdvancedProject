import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {View} from 'react-native';
import Animated, {ZoomOut} from 'react-native-reanimated';
import {styles} from './AnimatedSplashScreen.styles';
import {Props} from './AnimatedSplashScreen.types';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        exiting={ZoomOut}
        source={require('../../assets/lottie/splash_screen.json')}
        style={styles.content}
        autoPlay
        loop={false}
        onAnimationFinish={props.onAnimationFinish}
      />
    </View>
  );
};

export {AnimatedSplashScreen};
