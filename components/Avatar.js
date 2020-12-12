import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

export default function App(props) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '25%',
        height: 100,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile', { name: props.name })}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/564x/aa/1e/07/aa1e07f379be427baf733992d18691c1.jpg',
          }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 40,
          }}
        />
      </TouchableOpacity>
      <Text>{props.name}</Text>
    </View>
  );
}
