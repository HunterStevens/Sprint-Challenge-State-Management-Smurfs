const initialState = {
    characters:[],
    isFetching:false,
    error:''
}

export const SmurfsReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_SMURFS_START':
            return{
                ...state,
                isFetching:true
            }

        case 'FETCH_SMURFS_SUCCESS':
            return{
                ...state,
                characters:action.payload,
                isFetching:false,
                error:''
            }
        

        case 'FETCH_SMURFS_END':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }

        default:
            return state;
    }
}