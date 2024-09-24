var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.substring(0, 1), ". ").concat(lastName);
};
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
console.log(director1);
console.log(teacher3);
