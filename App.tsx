import React, {useEffect} from 'react';
import userbase from 'userbase-js';
import initialize from './userbase';
import config from './config';

import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  useEffect(() => {
    async function init() {
      try {
        await initialize();

        const session = await userbase.init({
          appId: config.USERBASE_APP_ID,
        });
        console.log('SESSION:', session);

        if (!session.user) {
          const user = await userbase.signIn({
            username: config.USERBASE_USERNAME,
            password: config.USERBASE_PASSWORD,
            rememberMe: 'local',
          });

          console.log('USER: ', user);
        }

        const dbs = await userbase.getDatabases();

        console.log('DB OPEN', dbs);
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
