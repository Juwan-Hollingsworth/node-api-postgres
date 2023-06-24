const Pool = require("pg").Pool;
const config = require("./config");
//establish connection to Postgres
const pool = new Pool({ config });

/* Creating endpoints for CRUD operations*/

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
// Get user data provided userID
const getUsersById = (request, response) => {
  //extract id from request.params obj
  const id = parseInt(request.params.id);
  /*execute SQL query against db : select all cols from table where the id matches*/
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
