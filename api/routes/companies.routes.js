module.exports = app => {
    const companies = require("../controllers/companies.controller.js");

    var router = require("express").Router();

    // Create a new company
    router.post("/", companies.create);

    // Retrieve all companies
    router.get("/", companies.findAll);

    // Retrieve a single company by id
    router.get("/:company_id", companies.findOne);

    // Update a company by id
    router.put("/:company_id", companies.update);

    // Delete a company by id
    router.delete("/:company_id", companies.delete);

    app.use('/api/companies', router);
};