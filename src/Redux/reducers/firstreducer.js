export const firstReducer= (state={message:"first data"},action) => {
    switch(action.type){
        case "MESSAGE_ACTION":
                 return {message:action.data}
        default:
                 return state;
    }

}

export const secondReducer=(state={name:"Archer"},action)=>{
    switch(action.type){
        case "NAME_ACTION":
               return {name: action.data}
        default:
               return state;
    }
}

// a Reducer is something which returns object
// usually all the reducers runs after every action
//but for very first time all the reducers run automatically