/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PushNotification from 'react-native-push-notification';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  PushNotification.createChannel(
    {
      channelId: 'channel-id', // 채널 ID
      channelName: 'My channel', // 채널 이름
      channelDescription: 'A channel to categorise your notifications', // 채널 설명
      soundName: 'default', // 알림 소리 (기본값: 'default')
      importance: 4, // 중요도 (기본값: 4)
      vibrate: true, // 진동 (기본값: true)
    },
    (created: any) => console.log(`createChannel returned '${created}'`), // 콜백 함수
  );

  // 반복 알림 설정
  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'channel-id',
      message: '내 메시지', // 알림 메시지
      date: new Date(Date.now() + 1 * 1000), // 1분 후
      repeatType: 'time', // 시간 단위로 반복
      repeatTime: 1 * 60 * 1000, // 1분마다 반복
    });
  };

  scheduleNotification;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
