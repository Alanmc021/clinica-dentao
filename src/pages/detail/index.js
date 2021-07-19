import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux'

function HomeScreen({ navigation }) {

    const clientes = useSelector((state) => {return state.clientes})

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(clientes);
                setMasterDataSource(clientes);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <TouchableOpacity onPress={() => navigation.navigate("MoreInfor", item)} style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.itemStyle} >
                    {item.id}
                    {'. '}
                    {item.name.toUpperCase()}
                </Text>              
            </TouchableOpacity>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={{ flexDirection: 'row',  width: '100%', height: 50 }}>
                <View style={{ backgroundColor: '#f5f5f5', width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("addClientes")}}> 
                        <Text>ADD CLIENTE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#f5f5f5', width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    
                </View>
                <View style={{ backgroundColor: '#f5f5f5', width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                     
                </View>
            </View>
            <SafeAreaView style={{ flex: 1, width: '100%' }}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Buscar Cliente por"
                    />
                    <FlatList
                        data={filteredDataSource}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 15,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

const DATA = [
    {
        id: 1,
        name: "Alan martins da cruz",
        cpf: '000.000.000-00',
        plano: false,
        nomeDoPlano: 'Assim',
        tipoDoPlano: 'gold',
        dataDeNascimento: '10/10/1984',
        dependente: false
    },
    {
        id: 2,
        name: "Bernado da Costa",
        cpf: '000.000.000-00',
        plano: false,
        nomeDoPlano: 'Assim',
        tipoDoPlano: 'gold',
        dataDeNascimento: '10/10/1984',
        dependente: false
    },
    {
        id: 3,
        name: "Fulano da silva",
        cpf: '000.000.000-00',
        plano: false,
        nomeDoPlano: 'Assim',
        tipoDoPlano: 'gold',
        dataDeNascimento: '10/10/1984',
        dependente: false
    },

]