import React, { Component } from 'react';
import {
    StyleSheet,Text,TextInput,View,Button,
} from 'react-native';

import Badge from 'components/Badge';
import Separator from 'components/Separator';





function Notes({ route }) {

    const [state, setState] = React.useState({ data: '' })
    const [data, setData] = React.useState({ value: '' })
    const user = route.params.data;
    
    
    const butonHandler = () => {
        let data=state.data
        setData(preData => ({
            ...preData,
            value:data
      }))
  }

    return (<View style={styles.container}>
    <Badge userInfo={user} />
        <Separator /> 
        <Text >{data.value}</Text>
        <TextInput
            value={state.data}
            placeholder="New Note"
            onChangeText={text => setState(prevState=>({...prevState,data:text}))}
            style={styles.searchInput}

        />
        <Button title='Submit' onPress={butonHandler} styles={styles.button}/>
    </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Notes;