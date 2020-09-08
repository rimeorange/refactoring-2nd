class Order {
    constructor(data) {
        this._priority = data._priority;
    }


    get priority() {
        return this._priority;
    }

    set priority(aString) {
        this._priority = aString;
    }
}
