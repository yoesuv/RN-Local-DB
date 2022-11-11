import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { RootStackParamList } from './root-stack-params';
import { loadUser } from '../redux/actions';
import { RootState } from '../redux/reducers';

export default function DetailScreen() {

    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
    const params = route.params;
    const dispatch = useDispatch();
    const stateDetail = useSelector((state: RootState) => state.detail);

    useEffect(() => {
        dispatch(loadUser(params.id));
    }, [])

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.label}>Id User : </Text>
                <Text style={styles.value}>{params.id}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Name : </Text>
                <Text style={styles.value}>{stateDetail.user?.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Username : </Text>
                <Text style={styles.value}>{stateDetail.user?.username}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Email : </Text>
                <Text style={styles.value}>{stateDetail.user?.email}</Text>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        padding: 16,
    },
    row: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    value: {
        fontSize: 16,
        color: 'black',
    },
})