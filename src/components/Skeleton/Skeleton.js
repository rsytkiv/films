import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { createBrowserHistory } from "history";
import General from '../General/General';
import Details from '../Details/Details';
import './Skeleton.css';

const history = createBrowserHistory();

function Skeleton() {
    return (
        <div>
            <Router history={history}>
                <ul className='navbar'>
                    <li><Link to='/general'>home</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/general' component={General}/>
                    <Route exact path='/details/:id' component={Details}/>
                    <Redirect to='/general' />
                </Switch>
            </Router>
        </div>
    )
}

export default Skeleton
