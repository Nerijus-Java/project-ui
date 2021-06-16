import {Route, Redirect, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import _ from "lodash"

const SecureRout = ({roles, ...props}) => {

    const  location = useLocation()

    const userRoles = useSelector(state => state.user.loggedInUser.roles);
    const auth = !!_.intersection(roles,userRoles).length

    return auth ? <Route {...props}/> : <Redirect to={{
        pathname: "/login",
        state : {
            from: location
        }
    }}/>

};

export default SecureRout