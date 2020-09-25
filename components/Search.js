import React from 'react';

import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, KeyboardAvoidingView,  ActivityIndicator, } from 'react-native';
import axios from "axios";

const Search = (props) => {
    
    const [search, setSearch] = React.useState({ username: "", loading: "", error: "" });

    const onPressHandler = async () => { 
     
        setSearch(prevState=>({...prevState,loading:true}))
        const response = await axios.get(`https://api.github.com/users/${search.username}`)
        console.log(response.data);
        props.navigation.navigate('Dashboard', { data: response.data })
   
        setSearch(prevState=>({...prevState,loading:""}))
    }

    return (<KeyboardAvoidingView style={styles.container}>
        <View>
            <Text style={styles.title}>Search for a GitHub user</Text>
        </View>
        <View>
            <TextInput
                placeholder='GitHub username'
                onChangeText={text => setSearch(prevState=>({...prevState,username:text}))}
                value={search.username}
                style={styles.searchInput}
                autoFocus={true}
            />
           <TouchableOpacity style={styles.button} onPress={onPressHandler}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
              {/* { search.loading && <View> <ActivityIndicator size="large" color='#0066CC' style={{ padding: 10 }} /> </View>}   */}
        </View>

    </KeyboardAvoidingView>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48BBEC',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    searchInput: {
        height: 50,
        padding: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
});
export default Search;