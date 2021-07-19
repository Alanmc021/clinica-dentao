import React from "react"
import { Text, View, ScrollView, Image } from "react-native"
import styles from "./styles"
import XpBar from "../../components/xpBar"
export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftbox}>
                    <Image
                        style={styles.imageProfile}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <View style={styles.boxLeveL}>
                        <Text>Level 10</Text>
                        <Text>Cassius</Text>
                        <Text>Humano</Text>
                        <Text>clerigo</Text>
                    </View>
                </View>
               
                <View style={styles.rigthBox}>
                    <Text>Haniliddaes</Text>
                </View>
            </View>
            <View style={styles.expertiseBox} >
                <Text>expertise</Text>
            </View>
            <View style={styles.expertiseBox} >
                <Text>expertise</Text>
            </View>
            <View style={styles.header}>
                <View style={styles.leftbox}>
                    <Text>Perfil</Text>
                </View>
                <View style={styles.rigthBox}>
                    <Text>haniliddaes</Text>
                </View>
            </View>
            <View style={styles.expertiseBox} >
                <Text>expertise</Text>
            </View>
            <View style={styles.dice} >
                <Text>expertise</Text>
            </View>
            <View>
                <XpBar />
            </View>
        </ScrollView>
    )
    
}

