import React from 'react';


const itemsReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch(action.type) {
        default:
            return newState;
    }
}