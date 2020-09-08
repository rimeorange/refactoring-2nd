
numAdvancedCourses = aPerson.courses
    .filter(c => c.isAdvanced)
    .length;

const basicCourseNames = readBasicCousesNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

for(const name of readBasicCousesNames(filename)) {
    aPerson.courses.push(new Course(name, false));
}
