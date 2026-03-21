const express = require('express');
const app = express();
app.use(express.json());



//database Schemas----------------------------------------------------------------------------------
//users data
const users = [
    {
        id: 1,
        username: "om",
        password: "1234"
    },
    {
        id: 2,
        username: "raman",
        password: "5678"
    }
];

//org 
const organization = [
    {
        id: 1,
        title: "100xdevs",
        description: "learning coding platform",
        admin: 1,
        members: [2]
    }
];

//board
const board = [
    {
        id: 1,
        title: "100x school website",
        organizationId: 1
    }
];

//issues
const issues = [
    {
        id: 1,
        title: "Add dark mode",
        boardId: 1
    }
];

// --------------------------------------------------------------------------------------------------


app.listen(3000);