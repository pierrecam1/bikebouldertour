import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Bikers from './Bikers/Bikers'
import Localize from './Localize/Localize';
import Photos from './Photos/Photos';
<<<<<<< HEAD
import SponsoringForm from './Sponsoring/SponsoringForm';
import SponsoringFormTest from './Sponsoring/SponsoringFormTest';
=======
import Sponsoring from './Sponsoring/Sponsoring';
>>>>>>> parent of 1f0ebda... Add SponsoringForm



const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/localize" component={Localize} />
            <Route exact path="/bikers" component={Bikers} />
            <Route exact path="/photos" component={Photos} />
<<<<<<< HEAD
            <Route exact path="/sponsoring" component={SponsoringForm} />
            <Route exact path="/sponsoring-test" component={SponsoringFormTest} />
=======
            <Route exact path="/sponsoring" component={Sponsoring} />
>>>>>>> parent of 1f0ebda... Add SponsoringForm
        </Switch>
    )
};
export default App;