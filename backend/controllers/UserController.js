const User = require('../models/UserModel')
const Redis = require('../redis/redis')


const getUsers = async (req,res) => {
    const redis_key = "get_user"
    const { reply } = await Redis.get(redis_key)
    try {
        const response = await User.findAll();
        const datacache = (response)
        if (reply) {
            // cache tersedia
            res.status(200).send(reply)
        } else {
            // set redis
            Redis.set(redis_key, JSON.stringify(datacache))
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getUserById = async (req,res) => {
    const redis_key = "get_user"
    const { reply } = await Redis.get(redis_key)
    try {
        const datacache = (response)
        const response = await User.findOne({
            where:{
                id: req.params.id
            }}
        )
        if (reply) {
            // cache tersedia
            res.status(200).send(reply)
        } else {
            // set redis
            Redis.set(redis_key, JSON.stringify(datacache))
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const createUser = async (req,res) => {
    try {
        await User.create(data2)
        res.send('User Created !')
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const updateUser = async (req,res) => {
    try {
        await User.update(update,{where:{
            id: req.params.id
        }})
        res.send('User Updated !')
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const deleteUser = async (req,res) => {
    try {
        await User.destroy({where:{
            id: req.params.id
        }})
        res.send('User Deleted !')
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const data2 = {
    "name" : "John Doe",
    "email" : "johndoe@gmail.com",
    "gender" : "Male"
}

const update = {
    "name" : "Bily David",
    "email" : "bilydavid@gmail.com",
    "gender" : "Male" 
}


module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser}