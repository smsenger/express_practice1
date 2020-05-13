const express = require('express');
const app = express();
const port = 8000;

//can use template literal to display text, can use html or plain text
//can use template literal to display text, can use html or plain text
app.get("/", (req, res) => res.send(`  
<!DOCTYPE html> 
<html> 
<head><title>hey there</title>
<body>
<h1>Hello World</h1>
${req.query.page ? req.query.page : "you are SO cool!"}
</body>
</head>
</html>
`));

//line 12 format follows this: 
// //if(req.query.page) {       //if 1st stmt is truthy it does that, if falsy it does second thing
//     return req.query.page;
// } else {
//     return 'you are so cool' 
// }

app.get('/all', (req, res) => {
    console.log(req);
    res.send('hey there');  //like a return for a function
})

app.listen(port, () => console.log(`listening on port http://127.0.0.1:${port}`));
