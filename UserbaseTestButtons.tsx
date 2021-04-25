import React, {useState} from 'react';
import {Button, ScrollView, View, StyleSheet, Text} from 'react-native';
import userbase, {Database, Item, Session} from 'userbase-js';
import config from './config';

const UserbaseTestButtons = () => {
  const [session, setSession] = useState<Session>({});
  const [isInitialized, setIsInitialized] = useState<Boolean>(false);
  const [databases, setDatabases] = useState<Database[]>([]);
  const [items, setItems] = useState<Item[]>([]);

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

  async function openDatabase() {
    await userbase.openDatabase({
      databaseName: databases[0]?.databaseName || 'poc-test-db',
      changeHandler: (dbItems: Item[]) => {
        setItems(dbItems);
      },
    });
  }

  async function getDatabases() {
    const response = await userbase.getDatabases();

    setDatabases(response.databases);
  }

  async function insertItem() {
    await userbase.insertItem({
      databaseName: databases[0]?.databaseName || 'poc-test-db',
      item: {text: 'Hello World!'},
    });
  }

  async function updateItem() {
    if (!items.length) {
      return;
    }

    await userbase.updateItem({
      databaseName: databases[0]?.databaseName || 'poc-test-db',
      itemId: items[0].itemId,
      item: {text: 'Hello World!'},
    });
  }

  async function deleteItem() {
    if (!items.length) {
      return;
    }

    await userbase.deleteItem({
      databaseName: databases[0]?.databaseName || 'poc-test-db',
      itemId: items[0].itemId,
    });
  }

  async function putTransaction() {
    await userbase.putTransaction({
      databaseName: databases[0]?.databaseName || 'poc-test-db',
      operations: [
        {
          command: 'Insert',
          item: {text: 'Hello World!'},
        },
        {
          command: 'Insert',
          item: {text: 'Hello World!'},
        },
        {
          command: 'Insert',
          item: {text: 'Hello World!'},
        },
        {
          command: 'Insert',
          item: {text: 'Hello World!'},
        },
        {
          command: 'Insert',
          item: {text: 'Hello World!'},
        },
        {
          command: 'Insert',
          item: {text: 'Hello World!'},
        },
      ],
    });
  }

  return (
    <ScrollView>
      {session.user && (
        <View>
          <Text>Logged in User: {session.user.username}</Text>
          <Text>Databases: {databases.length}</Text>
          <Text>Items {items.length}</Text>
        </View>
      )}
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
      <Button title="open Database" onPress={openDatabase} />
      <Button title="get Databases" onPress={getDatabases} />
      <Button title="insert Item" onPress={insertItem} />
      <Button title="update Item" onPress={updateItem} />
      <Button title="delete Item" onPress={deleteItem} />
      <Button title="put Transaction" onPress={putTransaction} />

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
