const router = require("express").Router();
// connects this file with functions defined in other files
// there should be two functions here
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../../lib/zookeepers");
const { zookeepers } = require("../../data/zookeepers");

// GET ROUTE (requests multiple returns based on user input)
router.get('/zookeepers', (req, res) => {
    let results = zookeepers;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// PARAMETERS ROUTES (single return based on ID)
router.get('/zookeepers/:id', (req, res) => {
    const result = findById(req.params.id, zookeepers);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// POST REQUEST CALLBACK ROUTE (store new zookeeper data on the server)
router.post('/zookeepers', (req, res) => {
    // creates an ID for new entry based on next available number in the array
    req.body.id = zookeepers.length.toString();
    
    // Error messgage for incorrect req.body data
    if (!validateZookeeper(req.body)) {
        res.status(400).send('The zookeeper is not properly formatted.');
    } else {
        const zookeeper = createNewZookeeper(req.body, zookeepers);
        res.json(zookeeper);
    }
}); 

module.exports = router;