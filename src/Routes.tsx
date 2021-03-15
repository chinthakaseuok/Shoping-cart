import React from "react";
import {Route, Switch} from "react-router-dom";
import CheckOut from "./component/content/Checkout/CheckOut";
import Home from "./component/content/Home/Home";

const Routes: React.FC = () => {

    return(
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
    );
};
export default Routes;
