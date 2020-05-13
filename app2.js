//EXERCISE 2 create an express app
const express = require('express');
const data = require('./data')
const app = express();
const port = 8000;

console.log(data) //see if data is coming into this module
//api that routes to cats, dogs, or animals
//send json like we used for apis
//use response.json, sends auto as json w/json headers

//this returns everything
// app.get('/', (req, res)=>res.send(data));  //.json can be used also: stringifies json automatically if only parameter is data, not if string added


//these return just the requested values 
app.get('/cat', (req, res)=> res.send(data.filter(animal => animal.type == "cat")));  
app.get('/dog', (req, res)=> res.send(data.filter(animal => animal.type == "dog")));
app.get('/name', (req, res)=> res.send(data.filter(animal => animal.type == "name")));


//specific id w/o using query strings     //uses /: because it's a param, not the word cat or dog like above, the ==is req.params.id and this is what you search for when entered in browser 
app.get('/:id', (req, res)=>res.send(data.filter(animal=>animal.id == req.params.id)))  //if enter a type in browser and type isn't first in js file, this will find empty array

//return animals based on color and age
app.get('/', (req, res) => {
    let age = req.query.age;
    let color = req.query.color;
    let a = [...data];

    if(age) {
        a = a.filter(animal=>animal.age == age);       //does a forEach, for each animal is animal age is same as input, then give the return
    }
    if(color) {
        a = a.filter(animal=>animal.color == color);
    }

    res.json(a);                  //test by adding /?color=white&age=3 -----will return empty if there's nothing that matches
})



//AGE RANGE
app.get('/', (req, res) => {
    let age = req.query.age;
    let color = req.query.color;
    let a = [...data];

    if(age) {
        a = a.filter(animal=>animal.age == age);       //does a forEach, for each animal is animal age is same as input, then give the return
    }
    if(color) {
        a = a.filter(animal=>animal.color == color);
    }

    res.json(a);                  //test by adding /?color=white&age=3 -----will return empty if there's nothing that matches
})


app.listen(port, () => console.log(`listening on port http://localhost:${port}`));
