namespace Subjects {
    export const cpp = new Cpp();
    export const java = new Java();
    export const react =  new React();

    export const cTeacher: Teacher = {
        firstName: "Eyiniola",
        lastName: "Fagbemi",
        experienceTeachingC: 10,
    };

    cpp.setTeacher(cTeacher);
    console.log(`C++  ${cpp.getRequirements()} ${cpp.getAvailableTeacher()}`)
    console.log(`Java  ${cpp.getRequirements()} ${cpp.getAvailableTeacher()}`)
    console.log(`React  ${cpp.getRequirements()} ${cpp.getAvailableTeacher()}`)
}