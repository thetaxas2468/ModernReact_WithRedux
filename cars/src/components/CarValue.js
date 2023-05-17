import { useSelector } from "react-redux";

function CarValue() {
    const totalValue = useSelector(({cars:{carsList,searchTerm}})=>{
        const filteredCars = carsList.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        let cost = 0;
        for(let car of filteredCars){
            cost += car.cost
        }
        return cost;
    })

    return <div>
        Total Value = {totalValue}
    </div>
}



export default CarValue;