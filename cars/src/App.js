import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import "bulma/css/bulma.css"
import "./styles.css"

function App() {



    return (
        <div className="container is-fluid">
            <CarForm></CarForm>
            <CarSearch></CarSearch>
            <CarList></CarList>
            <CarValue></CarValue>
        </div>
    )

}



export default App;