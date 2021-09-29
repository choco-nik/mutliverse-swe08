const setupDb = require("./setupDb");
const Company = require("./companies");
const Location = require("./locations");
const Menu = require("./menus");
const express = require("express");

/*async function createCompany() {
    await setupDb();
    const wendys = await Company.create({name: "Wendy's", logoURL: "1200px-Wendy%27s_full_logo_2012.svg.png"});
    wendys.createLocation({name: "London", capacity: 68, manager: "Sam Winter"});
    wendys.createMenu({title: "Burgers"});
}
createCompany();
*/

const app = express();

app.use(express.json());


app.get("/companies", async (req,res) =>  {
    const companies = await Company.findAll();
    res.json(companies);
});

app.get("/companies/:id", async (req,res) => {
    const company = await Company.findByPk(req.params.id, {
        include: Location, Menu,
    });
    if (!company) {
        return res.sendStatus(404);
    }
    res.json(company);
});

app.post("/companies", async (req,res) => {
    const {name, logoURL} = req.body;
    await Company.create({name,logoURL});
    res.sendStatus(201);
});

app.post("/companies/:id/locations", async (req,res) => {
    const company = await Company.findByPk(req.params.id);
    if (!company) {
        return res.sendStatus(404);
    }
    const {name, capacity, manager} = req.body;
    await company.createLocation({name,capacity,manager});
    res.sendStatus(201);
});

app.post("/companies/:id/menus", async (req,res) => {
    const company = await Company.findByPk(req.params.id);
    if (!company) {
        return res.sendStatus(404);
    }
    const {title} = req.body;
    await company.createMenu({title});
    res.sendStatus(201);
});

app.delete("/menus/:id", async (req,res) => {
    const menu = await Menu.findByPk(req.params.id);
    if(!menu) {
        return res.status(404);
    }
    await menu.destroy();
    res.sendStatus(200);
});


app.delete("/locations/:id", async (req,res) => {
    const location = await Location.findByPk(req.params.id);
    if(!location) {
        return res.status(404);
    }
    await location.destroy();
    res.sendStatus(200);
});

//express puts the values in an object req.params

app.put("/locations/:id", async (req,res) => {
    const location = await Location.findByPk(req.params.id, {
        include: Company, Location
    });
    if(!location) {
        return res.status(404);
    }
    await location.update({companyId:2});
    res.sendStatus(200);
});

app.get("/menus/:id", async (req,res) => {
    const menu = await Menu.findByPk(req.params.id);
    if(!menu) {
        return res.status(404);
    }
    res.json(menu);
});

app.put("/companies/:id", async(req,res) => {
    const companies = await Company.findByPk(req.params.id);
    if(!companies) {
        return res.status(404);
    }
    await companies.update({name: "KFC",logoURL:"1200px-KFC%27s_full_logo_2012.svg.png"});
    res.sendStatus(202);
});

setupDb();


module.exports = app;