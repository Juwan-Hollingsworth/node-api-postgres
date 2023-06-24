// import modules & middleware
const express = require("express");
const bodyParser = require("body-parser");
//create instance of express app
const app = express();
//define var for port # which app will listen 4 requests
const port = 3000;

//parse json encoded data sent thru request body
app.use(bodyParser.json());
//parse url encoded data also
app.use(bodyParser.urlencoded({ extended: true }));

// setup route handler for GET requests to ("/")
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//set app to listen to port
app.listen(port, () => {
  console.log(`App is running on port ${port} 🙂`);
});
