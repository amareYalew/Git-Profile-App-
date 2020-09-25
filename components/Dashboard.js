import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Dashboard = (props) => {
    const data = props.route.params.data;
    console.log(data)

    const imagUrl = props.route.params.data.avatar_url;

    return (
        <View style={styles.container}>
        <Image source={{ uri: imagUrl }}
          
            style={styles.box} />
        
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile Details", {data})} style={[styles.blue , styles.box] }>
            <Text style={styles.buttonText}>Profile Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Repositories", {data})} style={[styles.pink , styles.box ]}>
            <Text style={styles.buttonText}>Repositories</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => props.navigation.navigate("Note",{data})} style={[styles.purple , styles.box] }>
            <Text style={styles.buttonText }>Notes</Text>
        </TouchableOpacity>
       
  </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
    },
    blue: {
        backgroundColor: 'powderblue',
    },
    purple: {
        backgroundColor: 'violet'
    },
    pink: {
        backgroundColor: 'pink'
    }
});
export default Dashboard;