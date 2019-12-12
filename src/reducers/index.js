import { combineReducers } from 'redux';

const gridSizesReducer = () => {
    return [
        10,
        15,
        20,
        25,
        30,
    ]
}

const selectedGridSizeReducer = (selectedSize = 30, action) => {
    if (action.type === 'GRID_SIZE_SELECTED') {
        return action.payload;
    }

    return selectedSize;
}

const selectedColourHexReducer = (selectedColourHex = '#0f0', action) => {
    if (action.type === 'GRID_COLOUR_SELECTED') {
        return action.payload;
    }

    return selectedColourHex;
}

export default combineReducers({
    gridSizes: gridSizesReducer,
    selectedGridSize: selectedGridSizeReducer,
    selectedColourHex: selectedColourHexReducer,
});