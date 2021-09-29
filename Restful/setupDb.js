const sequelize = require("./db");
const Company = require("./companies");
const Location = require("./locations");
const Menu = require("./menus");


async function setupDb() {
    Company.hasMany(Location,{onDelete: "cascade"});
    Location.belongsTo(Company);
    Company.hasMany(Menu,{onDelete: "cascade"});
    Menu.belongsTo(Company);
    await sequelize.sync();
}

module.exports =setupDb;