interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Severance',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  contract: true, // add a new attribute
  salary: 50000, // add another new attribute
};

interface Directors extends Teacher {
  numberOfReports: number;
}

