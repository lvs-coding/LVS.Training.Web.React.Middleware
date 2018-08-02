import { FECTH_WEATHER, FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Here we can't mutate the state, it's not allowed, we have to return
            // a new array with the data of the new city
            // same as : return state.concat([action.payload.data])
            return [ action.payload.data, ...state ];
    }
    return state;
}