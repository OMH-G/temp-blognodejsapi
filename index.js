const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 8000;
// // Connect to MongoDB
// mongoose.connect('mongodb+srv://OMH-G:MongoOmh@testingcluster.ztxfjgz.mongodb.net/starter', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/',(req,res)=>{
    res.send("Hello world");
})
// // Define a schema for the uploaded files
// const fileSchema = new mongoose.Schema({
//     filename: String,
//     originalName: String,
//     filePath: String, // Store the path where the file is saved
//     uploadDate: Date,
// });

// const File = mongoose.model('File', fileSchema);

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads'); // Set the folder where files will be saved
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage });

// // Handle file upload
// app.post('/upload', upload.single('file'), async (req, res) => {
//     if (req.file) {
//         const newFile = new File({
//             filename: req.file.fieldname,
//             originalName: req.file.originalname,
//             filePath: req.file.path,
//             uploadDate: new Date(),
//         });

//         try {
//             await newFile.save();
//             res.status(200).send('File uploaded and saved to MongoDB.');
//         } catch (error) {
//             res.status(500).send('Error saving file to MongoDB.');
//         }
//     } else {
//         res.status(400).send('No file uploaded.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });

module.exports=app