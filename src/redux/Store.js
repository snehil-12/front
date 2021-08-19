import RequestReducer from './RequestReducer'
const redux =require('redux')
const createStore = redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const store =createStore(RequestReducer,applyMiddleware(thunkMiddleware))

export default store