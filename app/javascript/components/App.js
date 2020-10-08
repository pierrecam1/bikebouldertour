import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Localize from './Localize/Localize';
import Riders from './Riders/Riders';
import Photos from './Photos/Photos';
import Sponsoring from './Sponsoring/Sponsoring';



const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/localize" component={Localize} />
            <Route exact path="/riders" component={Riders} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/sponsoring" component={Sponsoring} />
        </Switch>
    )
};
export default App;