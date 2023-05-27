import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task (props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}
    

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#C0C0C0',
        borderRadius: 4,
        // opacity: 0.4,
        marginRight: 15,
        
    },
    itemText: {
        maxWidth: '80%',
    },
    circular : {
        width: 12,
        height: 12,
        borderColor: '#C0C0C0',
        borderWidth: 3,
        borderRadius: 5,
    },
});
