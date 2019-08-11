import uuid from 'uuid/v4'

export default class Card {
    constructor(title){
        this.id = uuid()
        this.title = title
        this.tags = []
    }
}
