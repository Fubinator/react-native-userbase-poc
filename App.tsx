import React, {useEffect} from 'react';
import initialize from './userbase';
import {SafeAreaView, StatusBar, View} from 'react-native';
import UserbaseTestButtons from './UserbaseTestButtons';

const App = () => {
  useEffect(() => {
    async function init() {
      await initialize();
    }
    init();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <UserbaseTestButtons />
      </View>
    </SafeAreaView>
  );
};

export default App;
