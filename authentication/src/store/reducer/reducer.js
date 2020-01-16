import * as actiontype from '../actions/actionTypes';


const initialState={
    token:null,
    error:null

}


export const reducer=(state=initialState,action)=>
{

    switch(action.type){
        case actiontype.AUTH_SUCCESS:
            return{...state,token:action.payload}
        case actiontype.AUTH_FAIL:
            return {...state,error:action.payload}
        case actiontype.AUTH_LOGOUT:
            return {...state,token:action.payload}
        default:
            return state

    }
}

export default reducer;