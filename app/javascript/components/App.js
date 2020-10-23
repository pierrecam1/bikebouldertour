import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Bikers from './Bikers/Bikers'
import Localize from './Localize/Localize';
import Photos from './Photos/Photos';
import SponsoringForm from './Sponsoring/SponsoringForm';



const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/localize" component={Localize} />
            <Route exact path="/bikers" component={Bikers} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/sponsoring" component={SponsoringForm} />
        </Switch>
    )
};
export default App;