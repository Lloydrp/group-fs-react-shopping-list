const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET Request
router.get("/", function (req, res) {
  console.log("in GET route");
  const query = 'SELECT * FROM "list" ORDER BY "purchased" ASC, "item";';
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERRROR making GET", error);
      res.sendStatus(500);
    });
}); //END GET ROUTE

// POST Request
router.post("/", function (req, res) {
  const itemToAdd = req.body;
  console.log("in POST route - item:", itemToAdd);
  const query = `
        INSERT INTO "list" ("item", "quantity", "unit")
        VALUES ($1, $2, $3);`;
  pool
    .query(query, [itemToAdd.item, itemToAdd.quantity, itemToAdd.unit])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("ERROR in POST", error);
      res.sendStatus(500);
    });
}); //END POST REQUEST

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

router.put("/purchased/:shoppingid", (req, res) => {
  const shoppingid = req.params.shoppingid;
  const queryText = `UPDATE "list" SET "purchased" = true WHERE "id" = $1;`;

  pool
    .query(queryText, [shoppingid])
    .then((results) => {
      res.send(`Purchased item: ${shoppingid}`).status(200);
    })
    .catch((error) => {
      console.log("error caught in PUT /purchased :>> ", error);
    });
});

// DELETE for /clear
router.delete("/clear", (req, res) => {
  const query = `DELETE FROM "list"`;
  pool
    .query(query)
    .then((response) => res.sendStatus(204))
    .catch((error) => {
      console.log("Error in DELETE ", error);
      res.sendStatus(500);
    });
});

// DELETE for /remove/:id
router.delete("/:shoppingid", (req, res) => {
  //console.log('Req.params in DELETE = ', req.params);
  const shoppingid = req.params.shoppingid;
  const query = `DELETE FROM "list" WHERE "id"=$1`;
  pool
    .query(query, [shoppingid])
    .then((response) => res.sendStatus(204))
    .catch((error) => {
      console.log("Error in DELETE by ID ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
