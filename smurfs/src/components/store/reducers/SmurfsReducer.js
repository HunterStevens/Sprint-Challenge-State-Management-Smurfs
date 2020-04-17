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
        

        case 'FETCH_SMURFS_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
        case 'NEW_SMURF_SUCCESS':
            const newSmurf ={
                name:action.payload.name,
                age:action.payload.age,
                height:action.payload.height,
                id:action.payload.id
            }
            return{
                ...state,
                characters:[...state.characters, newSmurf],
                error:''
            }
        case 'NEW_SMURF_FAIL':
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }

        default:
            return state;
    }
}