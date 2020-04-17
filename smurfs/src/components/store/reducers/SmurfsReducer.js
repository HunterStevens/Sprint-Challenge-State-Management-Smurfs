const initialState = {
    characters:[
        {
            name: '',
            age: null,
            height: '',
            id:Date.now()
        }
    ],
    isFetching:false,
    error:''
}

export const SmurfsReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_SMURFS_START':
            return{
                ...state,
                isFetching:true,
                error:''
            }

        case 'FETCH_SMURFS_SUCCESS':
            return{
                ...state,
                characters:[ action.payload.map(smurf =>{
                     return(
                    name:smurf.name,
                    age:smurf.age,
                    height:smurf.height,
                    id:smurf.id)
                
                })
                   ],
                isFetching:false
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