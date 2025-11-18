import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from "@/styles/theme";

export default function PaymentsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PaymentsScreen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.yellowLight,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
});
