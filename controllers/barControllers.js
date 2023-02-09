const barService = require('../service/barService')

    /* Where Bar */
exports.BarWhere = async (req, res, next) => {
    try {
        const model = req.body
        const where = await barService.WhereBar(model)
        const bar = await where[1][0]
        return res.status(200).send(bar);
    } catch (error) {
        next(error);
    }
}
    /* Create Bar */
exports.BarCreate = async (req, res, next) => {
    try {
        const model = req.body
        const create = await barService.CreateBar(model)
        const bar = await create[0]
        return res.status(200).send(bar);
    } catch (error) {
        next(error);
    }
}
    /* Update Bar */
exports.BarUpdate = async (req, res, next) => {
    try {
        const model = req.body
        const bar = await barService.UpdateUser(model)
        return res.status(200).send(bar);
    } catch (error) {
        next(error)
    }
}
    /* Delete Bar */
exports.BarDelete = async (req, res, next) => {
    try {
        const model = req.body
        const bar = await barService.DeleteBar(model)
        return res.status(200).send('1'); 

    } catch (error) {
        next(error)
    }
}