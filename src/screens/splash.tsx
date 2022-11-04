import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { THEME_COLOR } from '../data/colors';
import UseList from '../services/list-user-service';
import { RootStackParamList } from './root-stack-params';
import { RootState } from '../redux/reducers';

type splashScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen () {

    const navigation = useNavigation<splashScreenProp>();
    const { data, status } = UseList();
    const dispatch = useDispatch();
    const stateSplash = useSelector((state: RootState) => state.splash);

    useEffect(() => {
      console.log(`Splash Screen # ${stateSplash.isSuccess}`);
      
      if (status === 'success') {
        console.log('Splash Screen # sukses get data user');
      }
      if (stateSplash.isSuccess) {
        navigation.navigate('Home');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }
    }, [stateSplash.isSuccess, status]);

    return <View style={styles.container}>
      <Text style={styles.textSplash}>RN Local DB</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textSplash: {
      fontSize: 28,
      fontWeight: 'bold',
      color: THEME_COLOR
    }
  });