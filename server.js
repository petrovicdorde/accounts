const express = require("express");

const app = express();

app.get("/data/accounts-app", (req, res) => {
    const backAccounts = [];

    res.json(backAccounts);
})
