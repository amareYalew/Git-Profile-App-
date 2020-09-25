import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Separator from 'components/Separator';
import Badge from 'components/Badge';

const ProfileDetails = (props) => {
    const user = props.route.params.data;
 
    console.log(user)
    const detailsArr = ['company', 'location', 'followers', 'following', 'email', 'bio'];

    return (<View style={styles.container}>
        <Badge userInfo={user} />
        
        {detailsArr.map(item => <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}>{item}</Text>
            <Text style={styles.rowContent}>{user[item]}</Text>
        </View>)}
    </View>
      
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});
export default ProfileDetails;