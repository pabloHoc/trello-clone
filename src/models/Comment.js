import uuid from 'uuid/v4'

export default class Card {
    constructor(text){
        this.id = uuid()
        this.text = text
    }
}
