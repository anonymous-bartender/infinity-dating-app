import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Settings() {
  console.log('settings page ')
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Infinity Settings page</Text>
      <View></View>
    </View>
  );
}