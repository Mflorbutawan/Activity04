import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './screen/Main';
import Map from './screen/Map';
import { PaperProvider } from 'react-native-paper';
const Tab = createBottomTabNavigator();
import { Appbar } from 'react-native-paper';
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default function App() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <NavigationContainer>
    <PaperProvider>
    <Appbar.Header>
    <Appbar.Action icon="menu" onPress={_handleSearch} />
      <Appbar.Content title="React Native" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
   <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false, 
        }}/>
      <Tab.Screen name="Map" component={Map} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" color={color} size={size} />
          ),
          headerShown: false, 
        }} />
     
    </Tab.Navigator>
    </PaperProvider>
    </NavigationContainer>
  );
}


