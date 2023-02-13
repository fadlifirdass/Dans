const Book = require('../mongoose/books')

const getBooks = async (req,res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


module.exports = {getBooks}