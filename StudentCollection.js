
export class StudentCollection{

    constructor(students=[]){
        this.students = students;
    }

    //Method to add a student

    addStudent(name,age,grades,isEnrolled){
        const newStudent = {
            name : name,
            age: age,
            grades : grades,
            isEnrolled : isEnrolled
        };

        this.students.push(newStudent);
    }

    //Method to get a student by name

    getStudentByName(studentName){

        let isthere = undefined;
        let returningStudent = {};

        for (let student of this.students) {
            if(student.name.toUpperCase() == studentName.toUpperCase()){
                isthere=true;
                returningStudent = student;
                break;
            }else{
                isthere = false;
            }
        }

        if(isthere){
            return returningStudent;
        }else{
            console.log(`There's no student named ${studentName}`)
        }
    }

    //Method to remove a student by its name using the filter method

    removeStudentByName(studentName){

        this.students = this.students.filter((elementToFind) =>
            studentName.toUpperCase() !== elementToFind.name.toUpperCase()
        );

    }

    //Method to find a student by name and update their grades

    updateStudentGrades(studentName,grade1,grade2,grade3){

        for (let student of this.students) {
            if(student.name.toUpperCase() == studentName.toUpperCase()){
                student.grades = [grade1,grade2,grade3]
                break;
            }
        }

    }

    //Method to calculate the average grade of a student

    calculateAverageGrade(studentName){

        let averageGrade = 0;
        for (let student of this.students) {
            if(student.name.toUpperCase() == studentName.toUpperCase()){
                for(let i=0;i<student.grades.length;i++){
                    averageGrade+=student.grades[i]
                }
                return averageGrade/student.grades.length
            }
        }

    }

    //Method that returns an array of enrolled students

    getEnrolledStudents(){

        let enrolledStudents = []
        for (const student of this.students) {
            if(student.isEnrolled){
                enrolledStudents.push(student);
            }
        }

        return enrolledStudents;

    }

    //Method that return students older than a given age

    getStudentsAboveAge(givenAge){

        let studentsAboveAge=[]

        for (const student of this.students) {
            if(student.age > givenAge){
                studentsAboveAge.push(student);
            }
        }

        return studentsAboveAge;

    }

    //Method that return student with the highest average grade

    getPerfectStudent(){

        let perfectNote = 0;
        let perfectStudent = null;

        for (const student of this.students) {
            let actualNote = 0;
            for(let i=0;i<student.grades.length;i++){
                actualNote+=student.grades[i];
            }

            if(actualNote>perfectNote){
                perfectNote = actualNote;
                perfectStudent = student;
            }
            
        }

        return perfectStudent;
    }

    //Method that maps the students in a summary object with name and average grade

    getStudentSummaries(){

        return this.students.map(student =>{
            const totalGrades = student.grades.reduce((sum,grade)=>sum+grade,0); //I investigated and found reduce, 0 is the inicial value for the sum
            const averageGrade = totalGrades/student.grades.length;

            return{
                name:student.name,
                averageGrade : averageGrade
            };
        });

    }

    //Method that filters students passing a grade treshold

    getTopStudents(gradeTreshold){

        return this.students.filter(student =>{
            const totalGrades = student.grades.reduce((sum,grade)=>sum+grade,0);
            const averageGrade = totalGrades/student.grades.length;

            return averageGrade>=gradeTreshold
        });

    }

    //Method that filters enrolled students and returns an array of their names

    getEnrolledStudentNames() {
        return this.students.filter(student => student.isEnrolled).map(student => student.name);
    }
    
    //Method that returns an array of string formatting each student's grades

    formatGrades(){

        return this.students.map(student =>{
            return `${student.name}: ${student.grades.join(', ')}`
        });

    }

    //Method that filters students whose average grade is above 90

    getHonorRollStudents(){

        return this.students.filter(student =>{
            const totalGrades = student.grades.reduce((sum,grade) =>sum+grade,0);
            const averageGrade = totalGrades/student.grades.length;

            return averageGrade>=90
        });

    }

    //Method that converts the students array to a JSON string

    serializeStudents(){
        return JSON.stringify(this.students)
    }

    //Method that converts the JSON string into a students array

    deserializeStudents(stringJSON){
        return JSON.parse(stringJSON)
    }






}