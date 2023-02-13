const Redis = require('redis').createClient
const redisClient = Redis(6379,"localhost")


/**
 * get redis chache
 * @param {string} redis_key
 */

function get(redis_key) {
    return new Promise((resolve) => {
        redisClient.get(redis_key, (err, reply)=>{
            if(err){
                console.err(err)
            } else {
                console.log("Succes Get!", redis_key)
                resolve({reply})
            }
        })
    })
}

/**
 * set redis chache
 * @param {string} redis_key
 * @param {string} redis_value
 */

function set(redis_key,redis_value){
    console.log("Success", redis_key, redis_value)
    redisClient.set(redis_key, redis_value, 'EX', 20)
}

module.exports = {get, set}