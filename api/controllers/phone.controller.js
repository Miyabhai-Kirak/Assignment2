const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const phone = {
        phone_type: req.body.phone_type,  // Changed name to phone_type
        phone_number: req.body.phone_number,  // Added phone_number
        contactId: parseInt(req.params.contactId)
    };

    Phones.create(phone)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update phone by id
exports.update = (req, res) => {
    const id = req.params.phoneId;

    Phones.update(req.body, {
        where: { id: id, contactId: req.params.contactId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Phone was updated successfully."
                });
            } else {
                res.send({
                    message: "Cannot update Phone"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Phone with id=" + id
            });
        });
};