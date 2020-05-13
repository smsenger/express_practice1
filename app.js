
//THIS IS CODE WORKED OUT IN CLASS, USED IN FINAL VERSION IN app-1a.js
const express = require('express');
const app = express();
const port = 8000;

//can use template literal to display text, can use html or plain text



app.get("/legal", (req, res) => res.send("this is legal"));

app.get("/legal/:page/", (req, res) => res.send(req.params.page));  //at this point you can enter something after /legal and get the string you entered back on browser => page is a placeholder, sends in params.page

app.get("/legal/:page/:bar", (req, res) => res.send(req.params)); //can add more params to page, must enter that number of params to get valid response


//.listen is used to tell the express server that you created where to list and what to say when it gets a request... in the console where the server is running
app.get("/contact", (req, res) => res.send("this is contact"));

app.get("/about", (req, res) => res.send("this is about"));

app.listen(port, () => console.log(`listening on port http://127.0.0.1:${port}`));




//goes after res.send ----> <a href='./legal'>Legal</a>