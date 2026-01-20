import Student from "../model/Student.js";

export async function createStudent(req, res) {
    try {
        const student = new Student(req.body);   
         
        await student.save();                     

        res.status(201).json({
            message: "Student created successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating student",
            error: error.message
        });
    }
}

export async function getAllStudent(req, res) {
    try {
        const students = await Student.find(); 
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: "Couldn't find students",
            error: error.message
        });
    }
}
export async function deleteStudent(req, res) {
    try {
        const studentID = req.params.studentID || req.body.studentID;

        if (!studentID) {
            return res.status(400).json({
                message: "studentID is required"
            });
        }

        const deleted = await Student.deleteOne({ studentID });

        if (deleted.deletedCount === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
}
export async function updateStudent(req , res) {
    try{
        const studentID = req.params.studentID

        if(!studentID){
            return res.status(404).json({
                message : "Student not found"
            })
        }
        Student.updateOne({studentID : studentID},req.body).then(
            ()=>{
                res.json({
                    message : "Student update successfully"
                })
            }
        )

    }catch(error){
        res.status(500).json({
            message: "Error updating student",
            error: error.message
        })
    }
    
}

