//server.js
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
//>route>bookeroute.js


import express from "express";
import { createBook, getBook, getBooks } from "../controllers/book_crud.js";
import  Book from '../model/trail.js'

const router = express.Router();

router.post('/',createBook);

router.get('/package/:id',getBook);

router.get('/all',getBooks)

export default router;


//>model>trail.js>
import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  package:{
    type:String,
  },
  author:{
    type:String
  },
  
});

export default mongoose.model("Book", BookSchema)


//>controller>book_crud.js
import Book from "../model/trail.js"
import { createError } from "../utils/error.js";

//create book package
export const createBook = async (req, res, next) => {
    const newBook = new Book(req.body);
  
    try {
      const savedBook = await newBook.save();
      res.status(200).json(savedBook);
      res.send("You can now get the requested packages for your request")
    } catch (err) {
      next(createError(404,"Cannot create book"));
    }
  };

  //get books package
  export const getBook = async (req, res, next) => {
    try {
      const Book = await Book.findById(req.params.id);
      res.status(201).json(Book);
      res.send("New booking added for the POST request")
    } catch (err) {
      next(createError(404,"Cannot get  packages"));
    }
  };

  //get all 
  
export const getBooks = async (req, res, next) => {
    try {
      const Books = await Hotel.find()
      res.status(200).json(Books);
    } catch (err) {
      next(createError(404,"Invalid path"));
    }
  };
