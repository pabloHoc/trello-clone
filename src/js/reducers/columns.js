import { ADD_COLUMN } from 'js/constants/action-types'

const columns = (state = [], action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return [...state, action.payload]
    }
    return state
}

export default columns