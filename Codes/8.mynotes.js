server.js
//     ADVENTURE TRAILS APPLICATION
import express from 'express'
import dotenv from 'dotenv'
import Bookroutes from './routes/bookroute.js'
import mongoose from 'mongoose'
const app=express();

dotenv.config()

const PORT=process.env.PORT || 8080

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

  app.use(express.json());

  app.use('/books',Bookroutes)


app.listen(PORT,()=>{
    console.log(`The Server is running at ${PORT}`);
    console.log("Connected to Backend");
    connect()
})
>util>error.js>
export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };
>routes>Noteroutes.js>
import express from 'express';
const router = express.Router();
import { createNote, deleteNote, getNote, updateNote } from "../controllers/logging.js";
// import Notes from "../models/notes";
//routes
router.post('/',createNote)

router.get('/:id',getNote)

 router.put('/:id',updateNote)

 router.delete('/:id',deleteNote)

export default router;
>models>notes.js>
import mongoose from "mongoose";
const NoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      id:{
        type:Number,
        required:true
      },
      subject:{
        type:String,
        required:true,
      },
      email:{
        type:String
      },
      mobile:{
        type:Number
      },
});

export default mongoose.model("Notes", NoteSchema)
>controllers>logging.js
import Notes from "../models/notes.js";




//create
export const createNote = async (req, res, next) => {
    const newNote = new Notes(req.body);
  
    try {
      const savedNote = await newNote.save();
      res.status(200).json(savedNote);
    } catch (err) {
      next(err);
    }
  };

//get
export const getNote = async (req, res, next) => {
  try {
    const Note = await Notes.findById(req.params.id);
    res.status(200).json(Note);
  } catch (err) {
    next(err);
  }
};

//update
export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteNote = async (req, res, next) => {
  try {
    await Notes.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json("The Note has been deleted ");
  } catch (err) {
    next(err);
  }
};
