const { body, validationResult } = require('express-validator')

const validationUserRegistration = (req, res, next) => [
    body('firstName').isLength({ min: 3 }).withMessage("name should be atleast 3 characters"),

]