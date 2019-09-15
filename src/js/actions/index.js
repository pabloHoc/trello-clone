import * as ACTION from 'js/constants/action-types'

export const addColumn = payload => {
    return { type: ACTION.ADD_COLUMN, payload }
}

export const addCard = payload => {
    return { type: ACTION.ADD_CARD, payload }
}

export const togglePanel = () => {
    return { type: ACTION.TOGGLE_PANEL }
}