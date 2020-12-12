import DeviceInfo from 'react-native-device-info';

export default function App() {
  DeviceInfo.getUniqueId().then((uniqueId) => {
    console.log(uniqueId);
  });
}
