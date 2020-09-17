import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import Signup from '../components/Signup'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path ="/" render={() => <Signup/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
