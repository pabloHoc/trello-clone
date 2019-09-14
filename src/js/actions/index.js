import { ADD_COLUMN, ADD_CARD } from 'js/constants/action-types'

export const addColumn = payload => {
    return { type: ADD_COLUMN, payload }
}

export const addCard = payload => {
    return { type: ADD_CARD, payload }
}