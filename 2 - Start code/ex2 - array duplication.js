// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguyen", batch: "2024", age: 20},
  { firstName: "Bình", lastName: "Trang", batch:"2023", age: 22 },
  { firstName: "Cẩm", lastName: "Doun", batch:"2024", age: 21 },
  { firstName: "An", lastName: "Trang" , batch: "2025",age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {string} lastName
 * @param {string} batch
 * @param {age} newAge  - the student new age
 * 
 * 
 */
function updateStudentAge(firstName, lastName,batch, newAge) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch);
  if (student) {
    student.age = newAge;
    console.log(`Updated age of ${firstName} ${lastName} (Batch ${batch}) to ${newAge}`);
  } else {
    console.log(`Student ${firstName} ${lastName} (Batch ${batch}) not found.`);
  }
  }


// 1 - Update An age to 30
updateStudentAge("An","Trang","2025", 30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA,null,2));
