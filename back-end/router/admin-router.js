const express = require("express")
const { getAllUsers,getAllContacts,getAllServices,deleteUser,getUserById,updateUserById,deleteContact} = require("../controller/admin-controller")
const adminMiddleware = require('../middlewares/admin-middleware')
const authMiddleware = require('../middlewares/auth-middleware')
const router = express.Router()

router.route('/users')
.get(authMiddleware,adminMiddleware,getAllUsers)

router.route('/users/:id')
.get(authMiddleware,adminMiddleware,getUserById)

router.route('/users/update/:id')
.patch(authMiddleware,adminMiddleware,updateUserById)

router.route('/users/delete/:id')
.delete(authMiddleware,adminMiddleware,deleteUser)

router.route('/contacts')
.get(authMiddleware,adminMiddleware,getAllContacts)

router.route('/contacts/delete/:id')
.delete(authMiddleware,adminMiddleware,deleteContact)

router.route('/services')
.get(authMiddleware,adminMiddleware,getAllServices)








module.exports = router