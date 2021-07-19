const INITIAL_STATE = [
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
        name: "Fulano da silva Redux",
        cpf: '000.000.000-00',
        plano: false,
        nomeDoPlano: 'Assim',
        tipoDoPlano: 'gold',
        dataDeNascimento: '10/10/1984',
        dependente: false
    },
]

export default function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_CAR'){
        return[ ...state, action.cliente  ]
    }
    return state
}

export const addCliente = cliente =>{
    return{
        type: 'ADD_CAR',
        cliente
    }
}
