import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View, FlatList, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../redux/reducers';
import { loadFromRealm, removeFromRealm } from '../redux/actions';
import { UserModel } from '../models/user-model';
import { RootStackParamList } from './root-stack-params';
import { THEME_COLOR } from '../data/colors';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {

    const navigation = useNavigation<homeScreenProp>();
    const dispatch = useDispatch();
    const stateHome = useSelector((state: RootState) => state.home)
    let row: Array<any> = [];
    let prevOpenedRow: Swipeable;

    useEffect(() => {
        dispatch(loadFromRealm());
        if (stateHome.isSuccess) {
            console.log("Home Screen # list count : ", stateHome.users.length);
        }
    },[stateHome.isSuccess])

    interface TIItemUser {
        index: number;
        user: UserModel;
    }

    function removeRow(index: number, user: UserModel) {
        console.log("Home Screen # remove row index", index);
        console.log("Home Screen # remove user", user);
        dispatch(removeFromRealm(user));
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
    }

    function onItemClick(id: number) {
        console.log(`Home Screen # item click ${id}`);
        navigation.navigate('Detail', {
            id: id,
        })
    }

    const itemUser = ({index, user}: TIItemUser)  => {
        return <GestureHandlerRootView>
            <Swipeable
                renderRightActions={viewDeleteAction}
                onSwipeableOpen={() => {
                    removeRow(index, user);
                }}
                ref={(ref) => (row[index] = ref)}>
                <Pressable onPress={() => {
                    onItemClick(user.id);
                }}>
                {({ pressed }) => (
                    <View style={styles.itemUser}>
                        <Text style={pressed ? styles.labelPressed : styles.label}>
                            {user.name}
                        </Text>
                    </View>
                )}
                </Pressable>
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
            renderItem={({item, index}) => itemUser({index: index, user: item}) } 
            keyExtractor={(item) => item.id.toString()}
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
    labelPressed: {
        fontSize: 16,
        color: THEME_COLOR,
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