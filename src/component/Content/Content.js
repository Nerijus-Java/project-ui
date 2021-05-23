import {Route, Switch} from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import {Container, Paper} from "@material-ui/core";


export default () => (
    <>
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
        </Switch>
    </>
)