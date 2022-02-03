
import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import multer from 'multer';
import { VehicleModel } from './schemas/vehicle.schema.js';

// to include 'multer' module in server.js that exist in separate file.
// const multer = require('multer');

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

mongoose.connect('mongodb://localhost:27017/vehiclesDB')
.then(() => {
    console.log('Connected to DB Successfully');
})
.catch(err => console.log('Failed to Connect to DB', err))



app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
   res.json({message:'test'});
});

// define a storage location for all files
//Create a folder- images, in the root directory.
const imageStorage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        const fileName = file.fieldname+'_'+ Date.now() + path.extname(file.originalname)
        cb(null, fileName)
    }
})

const imageUpload = multer({
    storage: imageStorage,
})

app.post('/upload', imageUpload.single('file'), function(req,res) {
    res.json({file: req.file});
})

app.post('/create-vehicle', imageUpload.single("file") ,function(req,res) {
    const {year,make,model} = req.body
    const imgUrl = req.file?.path
    console.log(imgUrl);
    const vehicle = new VehicleModel({
        year,
        make,
        model,
        imgUrl
    })
    vehicle
    .save()
    .then(data => {
        console.log('vehicle created');
        res.json(data)})
    .catch(err => {
        console.log('vehicle error');
        res.status(501).json(err)})
});

app.get('/vehicles', function(req,res) {
    VehicleModel
    .find()
    .then(data => res.json(data))
    .catch(err => res.status(501).json(err));
});

app.get('/vehicle/:id', function(req,res) {
    const id = req.params.id;
    VehicleModel
    .findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(501).json(err));
});

app.put('/update-vehicle/:id', function(req,res) {
    const vehicle = req.body;
    console.log("vehhhhi");
    const id = req.params.id;

    VehicleModel
    .findByIdAndUpdate(
        id,
        vehicle,
        {
            new: true
        }
    )
    .then(data => {
        console.log("updated data: " + data);
        res.json(data);
    })
    .catch(err => res.status(501).json(err))
});

app.delete('/delete-vehicle/:id', function(req,res) {
    const id = req.params.id;
    VehicleModel
    .findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(501).json(err))
});


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})
