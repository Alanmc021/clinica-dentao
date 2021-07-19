import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { addCliente } from "../../store/clientes"
import { useDispatch } from "react-redux"

const App = ({ navigation }) => {
  const [name, setName] = React.useState("nome");
  const [cpf, setCpf] = React.useState("cpf");
  const [plano, setPlano] = React.useState("Plano");
  const [idade, setIdade] = React.useState("Idade");

  const dispatch = useDispatch()

  function onSubmit() {
    dispatch(addCliente(
      [{
        id: 5,
        name: "Fulano da silva Redux",
        cpf: '000.000.000-00',
        plano: false,
        nomeDoPlano: 'Assim',
        tipoDoPlano: 'gold',
        dataDeNascimento: '10/10/1984',
        dependente: false
      }]
    ))
  }
  // id: 3,
  // name: "Fulano da silva Redux",
  // cpf: '000.000.000-00',
  // plano: false,
  // nomeDoPlano: 'Assim',
  // tipoDoPlano: 'gold',
  // dataDeNascimento: '10/10/1984',
  // dependente: false
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 16 }}>Adcione um novo cliente </Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={setCpf}
          value={cpf}
        />

        <TextInput
          style={styles.input}
          onChangeText={setPlano}
          value={plano}
        />
        <TextInput
          style={styles.input}
          onChangeText={setIdade}
          value={idade}
        />

        <TouchableOpacity onPress={() => { onSubmit() }}>
          <Text style={{ fontSize: 18 }}>Enviar</Text>
        </TouchableOpacity>
      </SafeAreaView>


    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  input: {
    height: 40,
    width: '80%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 2,
    marginVertical: 20,
    padding: 10
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})

export default App