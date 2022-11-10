import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function DetailScreen() {
    return <SafeAreaView style={styles.container}>
        <Text>Detail User</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})