const {Users, Passengers, Tickets, Trains, Schedules, Vans, Stations} = require('../models/models')
const {Sequelize} = require('../db')
const {QueryTypes} = require('sequelize')
const sequelize = require('../db')

class DBControllerVans
{
    // Создание записи в таблице Vans
    async createVans(req, res, next)
    {
        try {
            const {type, capacity} = req.body
            if(!type||!capacity)
            {
                return next(ApiError.badRequest("Введите полностью данные"))
            }
            const createvan= await Vans.create({type, capacity})
            return res.json({message: "Производитель создан"})
        } catch (error) {
            next(ApiError.badRequest("Что-то пошло не так"))
            console.log(error)
        }
    }
    // Вывод всей таблицы Vans
    async getAll(req,res)
    {
        const vans = await Vans.findAll()
        return res.json(vans)
    }
    // Вывод записей по определённому ID таблицы Vans
    async getID(req,res)
    {
        const {id_van} = req.params
        let id_v = await Vans.findAll({where:{id_van}})
        return res.json(id_v)
    }
    // Удаление по выбранному ID таблицы Vans
    async DelId(req,res)
    {
        const {id_van} = req.params
        let delidvan = await Vans.destroy({where:{id_van}})
        return res.json(delidvan)
    }
    // Удаление всех записей в таблице Vans
    async DelFull(req,res)
    {
        let query_del_all=`DELETE FROM "vans"`
        const test_del_all = await sequelize.query(query_del_all)
        if(test_del_all) res.send({messenge: "Все записи удалены!"})
        else res.send({ERROR: "Не удалось удалить записи!"})
    }
    // Редактирование записей по выбранному ID Vans
    async RedId(req,res)
    {
        const {id_van} = req.body
        const redvan = await Vans.update({title : req.body.title},{where:{id_van}})
        return res.json(redvan)
    }
}

module.exports = new DBControllerVans()