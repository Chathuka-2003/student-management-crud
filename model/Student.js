import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {   
        studentID : {
            type : Number,
            required : true,
            unique : true,
        },
        email: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        contactNo: {
            type: Number   
        },
        address: {
            type: String
        }
    }
);

const Student = mongoose.model("Student", studentSchema);  
export default Student;
