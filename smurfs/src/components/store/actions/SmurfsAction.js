import axios from 'axios';

export const fetchSmurfs = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_SMURFS_START'})
        axios.get('http://localhost:3333/smurfs')
        .then(res =>{
            console.log("fetched API", res.data);
            dispatch({type:'FETCH_SMURFS_SUCCESS', payload:res.data});
        })
        .catch(err => {
            console.log('fetched API ERROR: ', err);
            dispatch({type:'FETCH_SMURFS_FAIL', payload:err})
        })
    }
}

export const newSmurfs = item =>{
    return dispatch =>{
        axios.post('http://localhost:3333/smurfs', item)
        .then(res =>{
            console.log("New Character API: ", res);
        })
        .catch(err =>{
            console.log("New Character ERROR: ", err);
        })
    }

}