// import { createStore } from 'redux'
// import devToolsEnhancer from 'remote-redux-devtools'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const counterReducer =  (state=0,action)=>{
    switch(action.type){
        case INCREMENT:
            state = state+1;
            console.log(state);
            return state;

        case DECREMENT:
            state = state-1;
            console.log(state);
            return state;

        default:
            return state;
    }
}

const incAction = ()=>{
    return{
        type:INCREMENT
    }
}

const decAction = ()=>{
    return{
        type:DECREMENT
    }
}

const store = Redux.createStore(counterReducer)

store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(decAction())
store.dispatch(incAction())