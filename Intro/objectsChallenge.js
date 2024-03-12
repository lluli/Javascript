// Challenge
// Declare an object cohort that has the following properties:

// a string name (e.g 'May2022')
// a number id (e.g 1234)
// an array of student names
// Declare a function that accepts that object as argument and print a message with
//  the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

const cohort = {
    name : 'May2022',
    id: 1234,
    studentNames: ['Ledia', 'Rosie', 'Lizzy']
}

function printInfo(cohort) {
    let cohortLength = (cohort.studentNames).length
    return `${cohort.id} - ${cohort.name} - ${cohortLength} - ${cohort.studentNames[0]}, ${cohort.studentNames[1]}, ${cohort.studentNames[2]}`
}
let answer = printInfo(cohort)

console.log(answer)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const cohort = {
//     name: 'May2022',
//     id: 1234,
//     studentNames: ['Ledia', 'Rosie', 'Lizzy']
// };

// function printInfo(cohort) {
//     const { id, name, studentNames } = cohort;
//     const cohortLength = studentNames.length;
//     const students = studentNames.join(', ');
//     return `${id} - ${name} - ${cohortLength} - ${students}`;
// }

// const answer = printInfo(cohort);
// console.log(answer);