import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CheckOut from "./component/content/Checkout/CheckOut";
import Home from "./component/content/Home/Home";

const Routes: React.FC = () => {

    return(
        <Router>
        <Switch>
            <Route
                path={'/checkout'}
                exact={true}
                children={()=> <CheckOut/>}
            />
            <Route
                path={'/'}
                children={()=><Home/>}
            />
        </Switch>
        </Router>
    );
};
export default Routes;
