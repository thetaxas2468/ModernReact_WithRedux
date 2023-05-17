import { createSlice, nanoid } from "@reduxjs/toolkit";



const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: "",
        carsList: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            // action.payload is a object that has name and cost
            state.carsList.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            // we want to remove the car with specific id that is action.payload
            const updated = state.carsList.filter(car => {
                return car.id !== action.payload
            });
            state.carsList=updated;
        }
    },
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;