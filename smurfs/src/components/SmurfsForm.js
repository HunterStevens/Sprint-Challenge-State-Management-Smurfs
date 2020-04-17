import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newSmurfs} from './store/actions/SmurfsAction';

const SmurfsForm = props => {
    const [smurf, setSmurf] = useState([]);


    return(
        <form onSubmit={formSubmit}>

            <button onClick={() =>props.newSmurfs()}>Create New Smurf</button>
        </form>
    )
}

const mapStateToProps = state =>{

}

export default connect(
    mapStateToProps,
    {newSmurfs}
)(SmurfsForm)