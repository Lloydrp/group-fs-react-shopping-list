const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET Request

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
router.delete('/clear', (req, res) => {
    const query = `DELETE FROM "list"`;
    pool.query(query)
        .then((response) => res.sendStatus(204))
        .catch(error => {
            console.log('Error in DELETE ', error)
            res.sendStatus(500);
        });
});
// DELETE for /remove/:id
router.delete('/:shoppingid', (req, res) => {
    //console.log('Req.params in DELETE = ', req.params);
    const shoppingid = req.params.shoppingid;
    const query = `DELETE FROM "list" WHERE "id"=$1`;
    pool.query(query, [shoppingid])
        .then((response) => res.sendStatus(204))
        .catch(error => {
            console.log('Error in DELETE by ID ', error);
            res.sendStatus(500);
        });
});
module.exports = router;
