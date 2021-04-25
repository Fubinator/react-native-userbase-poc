import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text} from 'react-native';
import userbase, {Session} from 'userbase-js';
import config from './config';

const UserbaseTestButtons = () => {
  const [session, setSession] = useState<Session>({});
  const [isInitialized, setIsInitialized] = useState<Boolean>(false);

  async function init() {
    const response = await userbase.init({
      appId: config.USERBASE_APP_ID,
    });

    setSession(response);
    setIsInitialized(true);
  }

  async function signUp() {
    await userbase.signUp({
      username: config.USERBASE_USERNAME,
      password: config.USERBASE_PASSWORD,
      rememberMe: 'local',
    });
  }

  async function signIn() {
    await userbase.signIn({
      username: config.USERBASE_USERNAME,
      password: config.USERBASE_PASSWORD,
      rememberMe: 'local',
    });
  }

  return (
    <ScrollView>
      {session.user && <Text>Logged in User: {session.user.username}</Text>}
      {!isInitialized && <Text>Not initialized</Text>}
      {isInitialized && !session.user && <Text>Not signed in</Text>}

      <Text style={styles.header}>Initialize</Text>
      <Button title="init" onPress={init} />

      <Text style={styles.header}>Users</Text>
      <Button title="sign Up" onPress={signUp} />
      <Button title="sign In" onPress={signIn} />
      <Button title="sign Out" onPress={() => null} />
      <Button title="forgot Password" onPress={() => null} />
      <Button title="update User" onPress={() => null} />
      <Button title="delete User" onPress={() => null} />

      <Text style={styles.header}>Data</Text>
      <Button title="open Database" onPress={() => null} />
      <Button title="get Databases" onPress={() => null} />
      <Button title="insert Item" onPress={() => null} />
      <Button title="update Item" onPress={() => null} />
      <Button title="delete Item" onPress={() => null} />
      <Button title="put Transaction" onPress={() => null} />

      <Text style={styles.header}>File Storage</Text>
      <Button title="upload File" onPress={() => null} />
      <Button title="get File" onPress={() => null} />

      <Text style={styles.header}>Data Sharing</Text>
      <Button title="share Database" onPress={() => null} />
      <Button title="modify Database Permissions" onPress={() => null} />
      <Button title="get Verification" onPress={() => null} />
      <Button title="verify User" onPress={() => null} />

      <Text style={styles.header}>Payments</Text>
      <Button title="purchase Subscription" onPress={() => null} />
      <Button title="cancel Subscription" onPress={() => null} />
      <Button title="resume Subscription" onPress={() => null} />
      <Button title="update Payment Method" onPress={() => null} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {fontWeight: '700', fontSize: 20, textAlign: 'center', marginTop: 20},
});

export default UserbaseTestButtons;
