import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName, reset } from "../store";


function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector(state => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    })
    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleCostChange = (e) => {
        const value = parseInt(e.target.value) || 0
        dispatch(changeCost(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({name,cost}))
        dispatch(reset());
    }

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Cars Site</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Car Name</label>
                    <input type="text" className="input is-expanded" value={name} onChange={handleNameChange}></input>
                </div>
                <div className="field">
                    <label className="label">Car Cost</label>
                    <input type="number" className="input is-expanded" value={cost || ""} onChange={handleCostChange}></input>
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
}



export default CarForm;