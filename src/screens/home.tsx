import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../redux/reducers';
import { loadFromRealm, removeFromRealm } from '../redux/actions';
import { UserModel } from '../models/user-model';
import { RootStackParamList } from './root-stack-params';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function HomeScreen() {

    const navigation = useNavigation<homeScreenProp>();
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

    function removeRow(user: UserModel) {
        dispatch(removeFromRealm(user));
    }

    function onItemClick(id: number) {
        console.log(`Home Screen # item click ${id}`);
        navigation.navigate('Detail', {
            id: id,
        })
    }

    const itemUser = ({user}: TIItemUser)  => {
        return <GestureHandlerRootView>
            <Swipeable
                renderRightActions={viewDeleteAction}
                onSwipeableOpen={() => {
                    removeRow(user);
                }}>
                <TouchableOpacity onPress={() => {
                    onItemClick(user.id);
                }}>
                    <View style={styles.itemUser}>
                        <Text style={styles.label}>{user.name}</Text>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </GestureHandlerRootView>
    }

    const viewDeleteAction = () => {
        return <View style={styles.containerDeleteAction}>
            <Text style={styles.labelDelete}>Delete</Text>
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
        backgroundColor: 'white',
        padding: 12,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1, 
    },
    label: {
        fontSize: 16,
        color: 'black',
    },
    containerDeleteAction: {
        backgroundColor: '#F44336',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingEnd: 20,
    },
    labelDelete: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})