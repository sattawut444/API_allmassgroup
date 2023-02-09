const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* Where Bar */
exports.WhereBar = async (model) => {
    let sql =`
    SELECT
    *
    FROM bar
    WHERE id = '${model.id}'
    `
    return sequelize.query(sql)
}
    /* Create Bar */
exports.CreateBar = async (model) => {
    return await models.bar.create({
        name : model.name,
        data : model.data,
        audience: model.audience,
        image: model.image,
        creact_time: new Date(),
    })
}
    /* Updare Data */
exports.UpdateUser = async (model) => {
    return await models.bar.update({
        name : model.name,
        data : model.data,
        audience: model.audience,
        image: model.image,
        update_time: new Date(),
    },{ where : { id : model.id }})
}
    /* Delete Bar */
exports.DeleteBar = async(models)=> {
    let sql = `
    DELETE 
    FROM 
    bar 
    WHERE id = ${models.id}
    `
    return sequelize.query(sql)
}