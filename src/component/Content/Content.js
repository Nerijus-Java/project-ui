import {Route, Switch, useLocation} from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "../../styles.css"
import Groups from "../Pages/Groups/Groups";
import Group from "../Pages/Group/Group";
import User from "../Pages/User/User";
import UpdateGroup from "../Formik/UpdateGroup/UpdateGroup";
import PostUpdateFormik from "../Formik/PostUpdateFormik/PostUpdateFormik";
import CommentUpdateFormik from "../Formik/CommentUpdateFormik/CommentUpdateFormik";
import Users from "../Pages/Users/Users";
import SecureRout from "./SecureRout";

function Content() {

    const location = useLocation()

    return (
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

                        <Route exact path="/groups/update/:id">
                            <UpdateGroup/>
                        </Route>

                        <Route exact path="/comment/update/:id">
                            <CommentUpdateFormik/>
                        </Route>

                        <Route exact path="/post/update/:id">
                            <PostUpdateFormik/>
                        </Route>

                        <Route exact path="/user">
                            <User/>
                        </Route>


                        <SecureRout roles={["ADMIN"]} path={"/users"}>
                            <Users/>
                        </SecureRout>

                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default Content