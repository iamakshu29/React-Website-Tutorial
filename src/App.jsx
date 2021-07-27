import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Menu from './Menu';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <Menu />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/service' component={Service} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default App;