import {useParams} from "react-router-dom";

const Group = () => {
    let {id} = useParams();

    return(
        <h1>Group : {id}</h1>
    )
}

export default Group;