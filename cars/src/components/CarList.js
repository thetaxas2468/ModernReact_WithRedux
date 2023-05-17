import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";


function CarList() {
    const dispatch = useDispatch();

    const carsList = useSelector(({ cars: { carsList, searchTerm } }) => {
        return carsList.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    })

    const name = useSelector(state=>{
        return state.form.name;
    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    const renderCars = carsList.map((car, index) => {
        return (
            <div className="panel" key={index}>
                <p className ={car.name.toLowerCase().includes(name.toLowerCase()) && name.length >0 && car.name.length - name.length <= car.name.length /2 ? "has-text-weight-bold" : ""}>
                    {car.name} - ${car.cost}
                </p>
                <button className="danger" onClick={() => handleCarDelete(car)}>Delete</button>
            </div>
        )
    })
    return <div className="car-list">
        {renderCars}
        <hr></hr>
    </div>
}



export default CarList;