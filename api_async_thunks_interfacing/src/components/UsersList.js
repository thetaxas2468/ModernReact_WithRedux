import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";


function UsersList() {

    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => {
        return state.users;
    })

    const renderData = data.map(user => {
        return <li>{user.id}-{user.name}</li>
    })
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (isLoading) {
        return <div>Loading ...</div>
    }
    if (error) {
        return <div>Error</div>
    }
    return <div>
        {<ul>{renderData}</ul>}
    </div>
}

export default UsersList;