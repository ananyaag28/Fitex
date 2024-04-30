const prisma = require('../../db')

const getCook = async (req, res, next) => {
    const { email } = req.body
    if(email) {
        const cook = await prisma.cook.findUnique({ where: { email: email } });
        if(cook){
            req.cook = cook
        }
    }
    next()
}

module.exports = {
    getCook
}