import React from 'react';
import Light_OnOff from './component/light_on_off';
import ProfileEdit from './component/profileEdit';
import Profile from './component/profile';
import Register from './component/form/register';


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ThirdComponent from './component/thirdComponent';

export default function ReactRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Light_OnOff />
                    </Route>
                    <Route path='/thirdComponent' exact>
                        <ThirdComponent />
                    </Route>
                    <Route path='/profile' exact>
                        <Profile />
                    </Route>
                    <Route path='/profile/edit/:id' exact>
                        <ProfileEdit />
                    </Route>
                    <Route path='/register' exact>
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
