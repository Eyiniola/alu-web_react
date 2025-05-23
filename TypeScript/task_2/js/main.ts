interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export const Teacher = class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}


export function executeWork(employee: DirectorInterface | TeacherInterface) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks()
    }else{
        return employee.workTeacherTasks()
    }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }else {
        return "Teaching History";
    }
}
  