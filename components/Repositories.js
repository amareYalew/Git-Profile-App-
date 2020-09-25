import React from 'react';
import {
    StyleSheet,Text,View,TouchableOpacity,ScrollView
} from 'react-native';

import Separator from 'components/Separator';
import Badge from 'components/Badge';

function Repositories({ navigation, route: { params } }) {
    
    const [user, setUser] = React.useState({ list: [], loading: false, error: null })


    
    React.useEffect(async () => {
        let result = await fetch(`${params.data.repos_url}`)
       
        let data = await result.json();
      
        setUser(preState => ({
            ...preState,
            list: data
        }))
    }, []);

    const Dataditail = (data) => {
        navigation.navigate('WEB', { url: data.html_url });
        
    }
    
    let RepoData = null;

    RepoData= user.list.map(item => {
        return (<View>
            <TouchableOpacity style={styles.rowContainer} onPress={() => Dataditail(item)}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
            <Separator />
        </View>
        )

    })

    return (
        
        <View style={styles.container}>
        <Badge userInfo={params.data} />
        <Separator />
        <ScrollView >
            {RepoData}
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default Repositories;