let express = require('express');
let router = express.Router();
const transactionsDatabase = require('../transactions-carter.json');

router.get('/', (req, res) => {
  res.status(200).json(transactionsDatabase);
});

module.exports = router;
