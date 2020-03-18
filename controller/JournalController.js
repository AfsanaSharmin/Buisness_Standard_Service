const journalService = require('../services/JournalService');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.insert_Journal = (req, res) => {

    journalService.insert_Journal(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send(result);
        }
        logger.log(req, result, err);
    })

};