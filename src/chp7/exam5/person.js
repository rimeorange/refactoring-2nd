class Person {
    
    get name() {
        return this._name;
    }
    set name(arg) {
        this._name = arg;
    }

    get telephoneNumber() {
        return this._telephoneNumber.toString;
    }

    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }

    set officeAreaCode(value) {
        this._telephoneNumber.areaCode = value;
    }

    get officeNumber() {
        return this._telephoneNumber.number;
    }

    set officeNumber(value) {
        this._telephoneNumber.number = value;
    }
}
