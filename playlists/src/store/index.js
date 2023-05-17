import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

// In here me are making action that is reseting both songs and movies
// so that both depend on this reset action so when we dispatch reset-> app/reset
// we will be calling automatically the extra reducer with the add case in both
// songs and movies and treutn [] with out state change will reset the state for both
// import reset from "./actions";



const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    }
})

// // console.log(songsSlice.actions.addSong("Lol"));

// const startingState = store.getState();
// console.log(startingState)

// // store.dispatch({
// //     type:"song/addSong",
// //     payload:"New Song"
// // })

// store.dispatch(songsSlice.actions.addSong("Some Song!"))

// const finalState = store.getState();
// console.log(finalState)


export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };