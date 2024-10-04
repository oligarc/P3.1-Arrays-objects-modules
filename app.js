import { StudentCollection } from "./StudentCollection.js";

//Creating student objects
const students = [
    { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
    { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
    { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
    { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
  ];

//Now start a new object of studentCollection and add the students we have
const studentCollection = new StudentCollection(students);

//Checking the add method, works fine

studentCollection.addStudent("Oliver",25,[99,99,99],true);
console.log(studentCollection)

//Checking the getStudentByName, works fine
 let firstry =  studentCollection.getStudentByName("John Doe");
 console.log(firstry)

 //Checking the removeStudentByName, works fine
 //It's not necesary to create another variable with this method because you're modifying the original list

 console.log("_______________________________")
 studentCollection.removeStudentByName("Oliver")
 console.log(studentCollection)

 //Checking the updateGrade, works fine

 //studentCollection.updateStudentGrades("John Doe",0,1,2);
 //console.log(studentCollection)

  //Checking the averageGrade, works fine

  let averageGrade = studentCollection.calculateAverageGrade("John Doe")
  console.log(averageGrade)

   //Checking the enrolledStudents, works fine

   let enrolledStudents = studentCollection.getEnrolledStudents();
   console.log(enrolledStudents)

   //Checking the studentsAboveAge, works fine

   let studentsAboveAge = studentCollection.getStudentsAboveAge(18)
   console.log(studentsAboveAge)

   //Checking the perfectStudent, works fine

   console.log("PERFECT STUDENT: ")
   let perfectStudent = studentCollection.getPerfectStudent();
   console.log(perfectStudent)

   //Checking the studentSummaries, works fine

  let studentSummaries = studentCollection.getStudentSummaries();
  console.log(studentSummaries)

  //Checking the topStudents

  console.log("TOP STUDENTS:")
  const topStudents = studentCollection.getTopStudents(90); //Had to create a const of this because it 
  //wasn't aplying correctly to the studentCollection itself
  console.log(topStudents)


  //Checking the formatGrades to String

  console.log("______________")
  let prueba = studentCollection.formatGrades()
  console.log(prueba)

  //Checking the JSON Stringfy

  let json = studentCollection.serializeStudents();
  console.log(json)

  //CHECKING the String JSON to JSON

  let jsonagain = studentCollection.deserializeStudents(json);
  console.log(jsonagain)