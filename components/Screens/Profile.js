import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Profile() {
  const route = useRoute();
  console.log('Profile opened, user=>' + route.params.name);
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>This is {route.params.name}'s profile</Text>
      <View></View>
    </View>
  );
}