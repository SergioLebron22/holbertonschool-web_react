interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

let student1: Student;
let student2: Student;

let studentList: Student[] = [student1, student2]

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentList.forEach(student => {
    const row = document.createElement('tr');

    const fisrtNameCell = document.createElement('td');
    fisrtNameCell.textContent = student.firstName;
    row.appendChild(fisrtNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

table.appendChild(tableBody);

document.body.appendChild(table);