import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RootStackParamList } from './src/screens/root-stack-params';
import SplashScreen from './src/screens/splash';
import { THEME_COLOR } from './src/data/colors';
import HomeScreen from './src/screens/home';
import store from './src/redux/store';

const configureStore = store();
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "RN Load More",
  headerStyle: {
    backgroundColor: THEME_COLOR
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  statusBarColor: THEME_COLOR,
};

export default function App() {
  return (
    <Provider store={configureStore}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={HomeScreen} options={{...baseOptions, title: "Home"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
