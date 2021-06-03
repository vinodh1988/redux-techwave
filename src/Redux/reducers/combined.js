import {combineReducers} from 'redux'
import {firstReducer,secondReducer} from './firstreducer'

console.log(firstReducer)
export const mystore =combineReducers({
    first : firstReducer,
    second: secondReducer
})
