import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View, FlatList, VirtualizedList } from 'react-native';
import { RootState } from '../redux/reducers';
import { loadFromRealm } from '../redux/actions';
import { UserModel } from '../models/user-model';

export default function HomeScreen() {

    const dispatch = useDispatch();
    const stateHome = useSelector((state: RootState) => state.home)

    useEffect(() => {
        dispatch(loadFromRealm());
        if (stateHome.isSuccess) {
            console.log(stateHome.users.length);
        }
    },[stateHome.isSuccess])

    interface TIItemUser {
        user: UserModel
    }

    const itemUser = ({user}: TIItemUser)  => {
        return <View style={styles.itemUser}>
            <Text style={styles.label}>{user.name}</Text>
        </View>
    }

    return <SafeAreaView style={styles.container}>
        <FlatList 
            data={stateHome.users}
            renderItem={({item}) => itemUser({user: item}) } 
            keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemUser: {
        padding: 12,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1, 
    },
    label: {
        fontSize: 16,
        color: 'black',
    }
})