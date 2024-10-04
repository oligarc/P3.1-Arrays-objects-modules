
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

    




}