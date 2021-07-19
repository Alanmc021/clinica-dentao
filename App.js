import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/pages/home"
import DetailsScreen from "./src/pages/detail"
import MoreInfor from "./src/pages/moreInfo"
import addClientes from "./src/pages/addCliente"

import { Provider } from 'react-redux'
import store from './src/store'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Details">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="MoreInfor" component={MoreInfor} />
          <Stack.Screen name="addClientes" component={addClientes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View } from 'react-native';
// import Main from "./src/pages/profile"

// export default function App() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Main />
//         <StatusBar style="auto"/>
//     </View>
//   );
// }


