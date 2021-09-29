/*it("Testing to see if Jest works", () => {
    expect(1).toBe(2);
  });
*/

  const sequelize = require("./db");
  const Company = require("./companies");
  const Location = require("./locations");
  const Menu = require("./menus");
  const setup = require("./setupDb");
  const sandbox = require("./sandbox");



test('URL should start with www', async() => {
    await setup();
    const mcd = await Company.create({
        name: "Wendy's",
        logoURL: "www.site.com",
    });
    expect(mcd.logoURL).toBe("www.site.com");
});


test('capacity should be integer', async() => {
    await setup();
    const mcd = await Company.create({
        name: "Wendy's",
        logoURL: "www.site.com",
    });
    const brighton = await mcd.createLocation({
        name: "Brighton",
        capacity: 150,
        manager: "Jackson",
    });
    expect(brighton.capacity).toBe(150);
});