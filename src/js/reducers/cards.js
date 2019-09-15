import { ADD_CARD } from 'js/constants/action-types'

const cards = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...state, action.payload]
    }
    return state
}

export default cards