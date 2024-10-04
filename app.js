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

 