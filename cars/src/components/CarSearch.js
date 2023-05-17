import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";


function CarSearch() {
    const dispatch = useDispatch();
    const {searchTerm}= useSelector((state)=>{
        return state.cars;
    })

    const handleSearchTermChange = (e)=>{
        dispatch(changeSearchTerm(e.target.value))
    }

    return <div className="list-header">
        <h3 className="title is-3">MyCars</h3>
        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input className="input" value={searchTerm} onChange={handleSearchTermChange}></input>
        </div>
    </div>
}



export default CarSearch;