import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Profile from '../Avatar';

export default function App() {
  const navigation = useNavigation();
  console.log('Home Page');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: '900', alignSelf: 'center' }}>
          Dating App
        </Text>
      </View>
      <View
        style={{
          flex: 0.8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 10,
          justifyContent: 'flex-start',
        }}>
        <Profile name="Alice" />
        <Profile name="Anita" />
        <Profile name="Naira" />
        <Profile name="Juan" />
        <Profile name="Bob" />
        <Profile name="Amara" />
        <Profile name="Simran" />
        <Profile name="Ronald" />
        <Profile name="Tim" />
        <Profile name="Nitesh" />
        <Profile name="Vikram" />
        <Profile name="Ferrari" />
        <Profile name="Joshua" />
        <Profile name="Sona" />
      </View>
      <View style={{ flex: 0.1, bottom: 0, marginVertical: 10 }}>
        <Button
          color="crimson"
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
}
