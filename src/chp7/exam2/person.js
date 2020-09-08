class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }
    get name() {
        return this._name;
    }
    get courses() {
        return this._courses;
    }

    set courses(asList) {
        this._courses = asList;
    }

    addCourse(aCourse) {
        this._courses.push(acourse);
    }

    removeCourse(aCourse, fnIfAbsent = () => {thrownew RangeError();}) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }
}
