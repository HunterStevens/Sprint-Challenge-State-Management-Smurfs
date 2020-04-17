import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newSmurfs} from './store/actions/SmurfsAction';

const SmurfsForm = props => {
    const [smurf, setSmurf] = useState({
        name:'',
        age:'',
        height:''
    });
    const inputChange = event =>{
        event.preventDefault();
        setSmurf({...smurf, [event.target.name]:event.target.value})
    }

    const formSubmit = event =>{
        event.preventDefault();
    }


    return(
        <form onSubmit={formSubmit}>
            <label htmlFor="smurfName">
                <input id="smurfName"
                type="text"
                value={smurf.name}
                onChange={inputChange}/>
            </label>
            <label htmlFor="smurfAge">
                <input id="smurfAge"
                type="text"
                value={smurf.age}
                onChange={inputChange}/>
            </label>
            <label htmlFor="smurfHeight">
                <input id="smurfHeight"
                type="text"
                value={smurf.height}
                onChange={inputChange}/>
            </label>

            <button onClick={() =>props.newSmurfs(smurf)}>Create New Smurf</button>
        </form>
    )
}

const mapStateToProps = state =>{
    return{
        addingSmurf: state.addingSmurf
    }
}

export default connect(
    mapStateToProps,
    {newSmurfs}
)(SmurfsForm)