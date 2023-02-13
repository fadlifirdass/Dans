const express = require('express')
const router = express.Router()
const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('../controllers/UserController')
const {getBooks} = require('../mongoose/booksC')


router.get('/users', getUsers)
router.get('/books', getBooks)
router.get('/users/:id', getUserById)
router.post('/create', createUser)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router;