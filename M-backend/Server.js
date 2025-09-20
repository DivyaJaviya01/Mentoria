const express = require('express');
const port = 3000;
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // res.send("Hello World!");
    // res.render("index");//but need to create index.ejs file in views folder
});

app.listen(
    port,
    () => {
        console.log(`Server is running on http://localhost:${port}`);
    }
)






// npm install ejs
// npm install nodemon --save-dev
// npx nodemon Server.js
// npm run devStart