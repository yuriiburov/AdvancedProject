import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen';
import {AnimatedSplashScreen} from '../../ui/AnimatedSplashScreen';

const SplashScreenProvider: FC<PropsWithChildren> = props => {
  const [isAppReady, setIsAppReady] = useState(false);

  const onSplashScreenAnimationFinish = () => {
    setIsAppReady(true);
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (!isAppReady) {
    return (
      <AnimatedSplashScreen onAnimationFinish={onSplashScreenAnimationFinish} />
    );
  }

  return <Animated.View entering={FadeIn}>{props.children}</Animated.View>;
};

export {SplashScreenProvider};
