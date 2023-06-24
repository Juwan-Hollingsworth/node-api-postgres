const Pool = require("pg").Pool;
const config = require("./config");
const pool = new Pool({ config });

// creating endpoints for CRUD operations

//Get all users f(x)
const getUsers = (request, response) => {
  //execute SQL query against db

  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    //execute once db transaction complete
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
