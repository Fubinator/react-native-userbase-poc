import React, {useEffect} from 'react';
import userbase from 'userbase-js';
import initialize from './userbase';

import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  useEffect(() => {
    async function init() {
      try {
        await initialize();

        const session = await userbase.init({
          appId: 'fe8bee16-a060-49e9-b0f2-793471e3e3bf',
        });
        console.log('SESSION:', session);

        const user = await userbase.signIn({
          username: 'fk',
          password: 'Abcd1234!',
        });

        console.log('USER: ', user);
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>React Native Userbase POC</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
