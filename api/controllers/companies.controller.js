const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

// Create a new company
exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contact_id: req.body.contact_id
    };

    Companies.create(company)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the company."
            });
        });
};

// Retrieve all companies
exports.findAll = (req, res) => {
    Companies.findAll()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving companies."
            });
        });
};

// Retrieve a company by ID
exports.findOne = (req, res) => {
    const id = req.params.company_id;

    Companies.findByPk(id)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving company with id=" + id
            });
        });
};

// Update a company by ID
exports.update = (req, res) => {
    const id = req.params.company_id;

    Companies.update(req.body, {
        where: { company_id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was updated successfully."
            });
        } else {
            res.send({
                message: "Cannot update company with id=${id}. Maybe company was not found or req.body is empty."
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating company with id=" + id
        });
    });
};

// Delete a company by ID
exports.delete = (req, res) => {
    const id = req.params.company_id;

    Companies.destroy({
        where: { company_id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.send({
                message: "Cannot delete company with id=${id}. Maybe company was not found."
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete company with id=" + id
        });
    });
};