//add the same header and footer to every page without copying the code onto each page --
//use a function or modules


const renderHeader = () => {   //this opens it, next fn closes it
    return ` 
    <!DOCTYPE html>           
    <html> 
    <head><title>Responses</title>
    <body>
    <header>   
        <a href="./legal">Link to legal</a>
        <a href="./about">Link to about</a>
        <a href="./contact">Link to contact</a>
    </header>
    `
};

const renderFooter = () => {
    return ` 
    <footer>This is the footer</footer>
    </body>
    </head>
    </html>
    `
};

module.exports = {renderHeader, renderFooter};  //if key is equal to value, can shorten like this
                                                //otherwise need both key and value