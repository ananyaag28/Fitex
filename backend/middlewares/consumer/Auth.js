const prisma = require('../../db')

const getConsumer = async (req, res, next) => {
    const { email } = req.body
    if(email) {
        const consumer = await prisma.consumer.findUnique({ where: { email: email } });
        if(consumer){
            req.consumer = consumer
        }
    }
    next()
}

module.exports = {
    getConsumer
}