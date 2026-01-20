import express from "express";
import { createStudent, deleteStudent, getAllStudent, updateStudent } from "../controller/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/create", createStudent);
studentRouter.get("/getAll",getAllStudent);
studentRouter.delete("/:studentID",deleteStudent); 
studentRouter.put("/:studentID",updateStudent);

export default studentRouter;
