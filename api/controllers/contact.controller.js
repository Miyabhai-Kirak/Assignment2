// Create contact
exports.create = (req, res) => {
    const contact = {
        name: req.body.name,
        address: req.body.address,  // Added address field
    };

    Contacts.create(contact)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update contact by id
exports.update = (req, res) => {
    const id = req.params.contactId;

    Contacts.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was updated successfully."
            });
        } else {
            res.send({
                message: "Cannot update Contact"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Contact with id=" + id
        });
    });
};