const express = require('express')

const {
    sendMessages
} = require("../controller/contact-controller")

const router = express.Router()

router.route('/')
.post(sendMessages)

module.exports = router