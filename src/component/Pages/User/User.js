import {useParams} from "react-router-dom";

const User = () => {
    let {id} = useParams();

    return(
        <h1>user {id}</h1>
    )
};


export default User;