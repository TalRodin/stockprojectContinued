import * as actions from '../actions/authTypes'



const initialState = {
    error: null,
    loading: false,
    deleteTrans: {
        error: null,
        loading: false
    }
}

export default (state=initialState, {type, payload})=>{
    switch(type){
        case actions.BUY_START:
            return {...state, loading:true}
        case actions.BUY_SUCCESS:
            return {...state, loading:false, error: false}   
        case actions.BUY_FAIL:
            return {...state, loading:false, error: payload}
        case actions.DELETE_TRANS_START:
            return {...state, deleteTrans: {...state.deleteTrans, loading:true}}
        case actions.DELETE_TRANS_SUCCESS:
            return {...state, deleteTrans: {...state.deleteTrans, loading:false, error: false}}
        case actions.DELETE_TRANS_FAIL:
            return {...state, deleteTrans: {...state.deleteTrans, loading:false, error: payload}}
    
        default:
            return state
    }
}
