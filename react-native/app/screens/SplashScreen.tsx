//SplashScreen.tsx
import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet, Text, View} from 'react-native';

interface SplashScreenProps {}

export const SplashScreen: FC<SplashScreenProps> = observer(
  function SplashScreen({}) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>실버벨 프로젝트</Text>
          </View>
          <View style={styles.copyright}>
            <Text style={styles.copyrightText}>Copyright @ 2023. ABT</Text>
            <Text style={styles.copyrightText}>
              Design & developed by happyphysicsclub.
            </Text>
          </View>
        </View>
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a8867',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'orange',
    fontSize: 40,
    fontWeight: '600',
  },
  copyright: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyrightText: {
    color: 'orange',
    fontSize: 14,
    fontWeight: '400',
  },
});
