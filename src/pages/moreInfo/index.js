import React from "react"
import { Text, View, ScrollView, Image } from "react-native"

export default function Profile({ route }) {
    const { id, name, dependete, nomeDoPlano, tipoDoPlano, dataDeNascimento, cpf } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', marginHorizontal: '10%', marginTop: 30 }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'blue', width: '100%', height: 50 }}>
                <View style={{ backgroundColor: 'red', width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Aprovar plano</Text>
                </View>
                <View style={{ backgroundColor: 'blue', width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Aprovar plano</Text>
                </View>
                <View style={{ backgroundColor: 'red', width: '33%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Aprovar plano</Text>
                </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>ID: {id}</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>Nome: {name}</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>Plano: {nomeDoPlano}</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>Dependete: {dependete ? "sim" : "Nao"}</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>Data De Nascimento: {dataDeNascimento}</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 10 }}>CPF: {cpf}</Text>
        </View>
    )

}

