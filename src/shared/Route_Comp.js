import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import {List, Login, Set_pswd, Reset_pswd, Evaluate} from '../pages';

class Route_Comp extends Component{
    render(){
        return(
            <Fragment>
                <Route exact path="/" component={List}  />
                <Route path="/login" component={Login}  />
                <Route path="/set_pswd" component={Set_pswd}  />
                <Route path="/reset_pswd" component={Reset_pswd}  />
                <Route path="/evaluate" component={Evaluate}  />
            </Fragment>
        );
    }
}

export default Route_Comp;