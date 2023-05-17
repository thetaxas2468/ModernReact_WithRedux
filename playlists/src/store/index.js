import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

// In here me are making action that is reseting both songs and movies
// so that both depend on this reset action so when we dispatch reset-> app/reset
// we will be calling automatically the extra reducer with the add case in both
// songs and movies and treutn [] with out state change will reset the state for both
export const reset = createAction("app/reset");

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            // action.payload is a song string name we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducer: (builder) => {
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
})
const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            // action.payload is a movie string name we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        extraReducer: (builder) => {
            builder.addCase(reset, (state, action) => {
                return [];
            })
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
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



export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;