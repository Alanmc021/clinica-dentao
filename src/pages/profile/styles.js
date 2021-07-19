import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? '12%' : '12%',
        backgroundColor: "#000"
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: '3.1%',
        height: 180
    },
    imageProfile:{
        height:78,
        width:78,
        borderRadius:50,
        margin: 10,
        marginTop:11, 
    },
    boxLeveL:{
        margin: 5,
        alignItems: 'center',
        top:4
    },
    leftbox: {
        backgroundColor: "red",
        width: '50%',
        flexDirection:'row'
    },
    rigthBox: {
        backgroundColor: "green",
        width: '50%'
    },
    expertiseBox:{
        backgroundColor: "pink",
        width: '100%',
        height: 75,
        marginTop:'3%',
        marginBottom:'3%'
    },
    dice:{
        backgroundColor: "pink",
        width: '100%',
        height: 65,
        marginTop:'3%',
        marginBottom:'3%'
    }
})