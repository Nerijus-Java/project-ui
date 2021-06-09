import {Route, Switch, useLocation} from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "../../styles.css"
import Groups from "../Pages/Groups/Groups";
import Group from "../Pages/Group/Group";


function Content() {

    const location = useLocation()

    return(
        <>
            <TransitionGroup>
                <CSSTransition timeout={250} classNames='fade' key={location.key}>
                    <Switch location={location}>
                        <Route exact path="/">
                            <LandingPage/>
                        </Route>

                        <Route path="/login">
                            <Login/>
                        </Route>

                        <Route path="/register">
                            <Register/>
                        </Route>

                        <Route exact path="/groups">
                            <Groups/>
                        </Route>

                        <Route exact path="/groups/:id">
                            <Group/>
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default Content