import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "@/styles/theme";

export default function HistoryScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>History</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.yellowMid,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
});
