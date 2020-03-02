const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getUsers()
        .then(response => {
            res.json(response)
        })
})

module.exports = router
