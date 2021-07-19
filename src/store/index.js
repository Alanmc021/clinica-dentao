import { createStore, combineReducers } from "redux"
import clienteReducer from "./clientes"

const rootReducer = combineReducers({
    clientes: clienteReducer
})

export default createStore(rootReducer)