interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Eyi',
    lastName: 'Daniles',
    age: 20,
    location: 'Abuja',
};

const student2: Student = {
    firstName: 'Bola',
    lastName: 'Thompson',
    age: 21,
    location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

studentsList.forEach((student) => {
    const row = tbody.insertRow();
    row.insertCell().innerHTML = student.firstName;
    row.insertCell().innerHTML = student.location;
});

document.body.appendChild(table);

