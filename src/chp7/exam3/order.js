class Order {
    constructor(data) {
        this._priority = data._priority;
    }


    get priority() {
        return this._priority.toString();
    }

    set priority(aString) {
        this._priority = new Priority(aString);
    }
}
