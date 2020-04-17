import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from './store/actions/SmurfsAction';

const SmurfsList = props =>{
    useEffect(() => {
        props.fetchSmurfs();
    },[])

    return (
        <div className="mainList">
            {props.characters.map(char => (
                <div key={char.id}>
                    <h1>Name: {char.name}</h1>
                    <h3>age:{char.age}</h3>
                    <p>height:{char.height}</p>
                </div>   
            ))}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        characters:state.characters
    }
}

export default connect(mapStateToProps,
    {fetchSmurfs})(SmurfsList);