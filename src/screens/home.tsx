import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { RootState } from '../redux/reducers';
import { loadFromRealm } from '../redux/actions';

export default function HomeScreen() {

    const dispatch = useDispatch();
    const stateHome = useSelector((state: RootState) => state.home)

    useEffect(() => {
        dispatch(loadFromRealm());
        if (stateHome.isSuccess) {
            console.log(stateHome.users.length);
        }
    },[stateHome.isSuccess])

    return <SafeAreaView>
        <View>
            <Text>Home</Text>
        </View>
    </SafeAreaView>
}