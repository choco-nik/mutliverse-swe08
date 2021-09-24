const Post = require("./post");
const User = require("./user")

test("User must not be empty", () => {
    const testPost = new Post('18/09/2021',"Help me grow plants", "Tomatoes preferrably","nikold");
    expect(testPost.author).toBeDefined();
});

test("User must be a string", () => {
    const testUser = new User(12345);
    expect(testUser.username).not.toBe(12345);

});


//test is not defineed, it should have a package.json and have a dependency for jest
//npm run test