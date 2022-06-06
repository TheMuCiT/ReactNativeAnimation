import {View, StyleSheet, Pressable, Text} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';

const AnimationScreen = () => {
  const anim = useRef<LottieView>(null);
  const startAnimation = () => {
    if (!anim.current) {
      return;
    }
    anim.current.play(0, 30);
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.animContainer}> */}
      <LottieView
        ref={anim}
        loop={false}
        source={require('../../Animation/Anim.json')}
      />
      {/* </View> */}
      <Pressable onPress={startAnimation}>
        <Text>Press to start animation</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animContainer: {backgroundColor: 'red'},
});

export default AnimationScreen;
