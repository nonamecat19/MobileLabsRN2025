import {Text, View, StyleSheet} from "react-native";

export function Header() {
   return (
       <View style={styles.header}>
           <Text style={styles.title}>
               📝 To-Do Reminder
           </Text>
       </View>
   )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})