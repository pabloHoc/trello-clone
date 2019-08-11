import uuid from 'uuid/v4'

export default class Column {
    constructor(title){
        this.id = uuid()
        this.title = title
        this.cards = []
    }
}
