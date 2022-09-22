const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET Request
router.get('/', function (req, res) {
    console.log('in GET route');
    const query = 'SELECT * FROM "list" ORDER BY "purchased" DESC, "item";';
    pool.query(query).then((result) => {
        console.log('GET request', result);
        res.send(result.row);
    }).catch((error) => {
        console.log('ERRROR making GET', error);
        res.sendStatus(500);
    })
}); //END GET ROUTE

// POST Request

// PUT for /reset

router.put("/reset", (req, res) => {
  const queryText = `UPDATE "list" SET "purchased" = false;`;

  pool
    .query(queryText)
    .then((results) => {
      res.send("Reset all items to not purchased").status(200);
    })
    .catch((error) => {
      console.log("error caught in PUT /reset :>> ", error);
    });
});

// PUT for /purchase/:id

// DELETE for /clear

// DELETE for /remove/:id

module.exports = router;
