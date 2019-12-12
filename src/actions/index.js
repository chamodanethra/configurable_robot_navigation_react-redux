// Action Creator
export const selectGridSize = (size) => {
    return {
        type: 'GRID_SIZE_SELECTED',
        payload: size 
    };
};

export const selectColourHex = (colourHex) => {
    return {
        type: 'GRID_COLOUR_SELECTED',
        payload: colourHex 
    };
};
