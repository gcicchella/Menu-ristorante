import {Text, View, StyleSheet} from "react-native";

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}> {children} </Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontsize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 14,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
});