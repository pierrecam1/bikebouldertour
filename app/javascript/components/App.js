import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Bikers from './Bikers/Bikers'
import Localize from './Localize/Localize';
import Photos from './Photos/Photos';
import SponsoringForm from './Sponsoring/SponsoringForm';
import SponsoringFormTest from './Sponsoring/SponsoringFormTest';



const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/localize" component={Localize} />
            <Route exact path="/bikers" component={Bikers} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/sponsoring" component={SponsoringForm} />
            <Route exact path="/sponsoring-test" component={SponsoringFormTest} />
        </Switch>
    )
};
export default App;