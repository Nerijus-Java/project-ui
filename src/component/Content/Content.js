import {Switch, Route} from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";

export default () => (
    <>
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </Switch>
    </>
)