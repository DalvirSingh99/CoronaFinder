import React,{ useEffect } from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import fetchQuestion from '../actions/getQuestions'
import {bindActionCreators} from 'redux'
import DemographicForm from '../components/DemographicForm'
import {withRouter} from 'react-router'
import getQuestions  from '../actions/getQuestions'
import {saveDemoData} from '../actions/makeTraigeResponse'

class DemographicContainer extends React.Component{    
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log("Demographic Submitted!")
        this.props.getQuestions(this.props.state)
        this.props.saveDemoData(this.props.state)
        this.props.history.push('/questions')
        
    }
    render() {
        return(
            <div> 
            <DemographicForm handleSubmit= {this.handleSubmit}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        state: state
    };
}

const mapActionsToProps = ( dispatch) => {
    return {
        getQuestions: bindActionCreators(getQuestions, dispatch),
        saveDemoData: bindActionCreators(saveDemoData, dispatch)
    }
  }


export default withRouter(connect(mapStateToProps, mapActionsToProps)(DemographicContainer));