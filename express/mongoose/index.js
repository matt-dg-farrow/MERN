const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser:true}).then(
    () => {console.log('SUCCESS')},
    (err) => {console.log('OH NO')}
);

let Schema = mongoose.Schema;

let reviewSchema = new Schema ({
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    criticReview: String
});

let actorSchema = new Schema ({
    name: String,
    gender: String,
    dob: Date
});

let movieSchema = new Schema ({
    title: String,
    description: String,
    releaseDate: Date,
    // children: [actorSchema, reviewSchema]
});

let Movie = mongoose.model('movie', movieSchema);

let theFilm = new Movie({
    "title" : "THE FILM", 
    "description" : "IT'S THE FILM",
    "releaseDate" : "2020-02-20"
});

theFilm.save();

Movie.find({"title" : "THE FILM"}, 
    (err,res) => {console.log(res);});