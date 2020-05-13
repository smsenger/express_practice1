const express = require('express');
const app = express();
const port = 8000;
const {renderHeader, renderFooter} = require('./app-1sandwich');  //this will match up key nms of values with the functions in the exported module

const app1Sandwich = require('./app-1sandwich');  //sets var equal to the object on the right

//can use template literal to display text, can use html or plain text

let header = renderHeader();
let footer = renderFooter();


app.get("/legal", (req, res) => {
    //let header = app-1sandwich.renderHeader ---> 2nd way
    res.send(
    ` 
    ${header}
    <h2>welcome to the legal page</h2>
    ${footer}
    `
)});


app.get("/about", (req, res) => res.send(
    ` 
    ${header}
    <h2>welcome to the about page</h2>
    ${footer}
    `
));


app.get("/contact", (req, res) => res.send(
    ` 
    ${header}
    <h2>welcome to the contact page</h2>
    ${footer}
    `
));




app.listen(port, () => console.log(`listening on port http://127.0.0.1:${port}`));
