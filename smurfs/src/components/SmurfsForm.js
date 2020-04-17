import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newSmurfs} from './store/actions/SmurfsAction';

const SmurfsForm = props => {
    const [smurf, setSmurf] = useState({
        name:'',
        age:'',
        height:'',
        id:Date.now()
    });
    const inputChange = event =>{
        setSmurf({...smurf, [event.target.name]:event.target.value})
    }

    const formSubmit = event =>{
        event.preventDefault();
    }


    return(
        <form onSubmit={formSubmit}>
            <h3>New Smurf's Form</h3>
            <label htmlFor="smurfName">
                Name:
                <input id="smurfName"
                name="smurfName"
                type="text"
                value={smurf.name}
                onChange={inputChange}/>
            </label>
            <label htmlFor="smurfAge">
                Age:
                <input id="smurfAge"
                type="text"
                name="smurfAge"
                value={smurf.age}
                onChange={inputChange}/>
            </label>
            <label htmlFor="smurfHeight">
                Height:
                <input id="smurfHeight"
                type="text"
                name="smurfHeight"
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