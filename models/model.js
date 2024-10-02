const { type } = require('os')
const sequelize = require('../db')
const {DataTypes, DATE, MEDIUMINT} = require('sequelize')

const Users = sequelize.define('users',{
    id_user: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    login: {type: DataTypes.STRING},
    password: {type: DataTypes.DATE},
    role: {type: DataTypes.DATE}
})

const Passengers = sequelize.define('passengers', {
    id_passenger: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_user: {type: DataTypes.INTEGER, primaryKey: true},
    first_name: {type: DataTypes.TEXT},
    last_name: {type: DataTypes.TEXT}
})

const Tickets = sequelize.define('tickets', {
    id_ticket: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    id_passenger: {type: DataTypes.STRING},
    number_van: {type: DataTypes.TEXT},
    place: {type: DataTypes.TEXT},
    category: {type: DataTypes.TEXT}
})

const Trains = sequelize.define('trains', {
    id_train: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number_train: {type: DataTypes.TEXT},
    type_train: {type: DataTypes.TEXT}
})

const Schedules = sequelize.define('schedules', {
    id_schedule: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    id_train: {type: DataTypes.TEXT},
    id_station: {type: DataTypes.STRING, autoIncrement: true},
    way: {type: DataTypes.INTEGER},
    arrival_time: {type: DataTypes.TEXT},
    departure_time: {type: DataTypes.TEXT}
})

const Van = sequelize.define('van', {
    id_van: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.TEXT},
    capacity: {type: DataTypes.TEXT},
    id_train: {type: DataTypes.INTEGER}
})

const Stations = sequelize.define('stations', {
    id_station: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name_station: {type: DataTypes.TEXT},
    location: {type: DataTypes.STRING, unique: true}
})

// const Produkt_Menu = sequelize.define('produkt_menu', {
// })

Passengers.hasMany(Users)
Users.belongsTo(Passengers)

Passengers.hasMany(Tickets)
Tickets.belongsTo(Passengers)

Van.hasMany(Tickets)
Tickets.belongsTo(Van)

Trains.hasMany(Van)
Van.belongsTo(Trains)

Trains.hasMany(Schedules)
Schedules.belongsTo(Trains)

Stations.hasMany(Schedules)
Schedules.belongsTo(Stations)

// const Order_Menu = sequelize.define('order_menu', {

// })
// //Продукт_Блюда
// {   
//     Prodykt.hasOne(Produkt_Menu)
//     Produkt_Menu.belongsTo(Prodykt)

//     Menu.hasMany(Produkt_Menu)
//     Produkt_Menu.belongsTo(Menu)
// }
// //Заказ_Блюда
// {
//     Menu.hasMany(Order_Menu)
//     Order_Menu.belongsTo(Menu)

//     Orders.hasMany(Order_Menu)
//     Order_Menu.belongsTo(Orders)
// }

// Clients.hasMany(Orders)
// Orders.belongsTo(Clients)

// Provider.hasMany(Prodykt)
// Prodykt.belongsTo(Provider)

// Staff.hasMany(Menu)
// Menu.belongsTo(Staff)


module.exports = {
    Users, Passengers, Tickets, Trains, Schedules, Van, Stations 
}