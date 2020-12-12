import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import DeviceInfo from 'react-native-device-info';

export default function App() {
  const navigation = useNavigation();
  console.log('starting');
  // const logic = () => {
  //   const uniqueId = DeviceInfo.getUniqueId();
  // }
  // const uniqueId = DeviceInfo.getUniqueId();
  // console.log(uniqueId);
  // navigation.navigate('Home');

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Infinity landing page</Text>
      <View>
        <Button
          color="crimson"
          title="Start"
          onPress={() => navigation.navigate('Home')}
          // onPress={logic()}
        />
      </View>
    </View>
  );
}