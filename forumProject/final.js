const User = require("./user");
const Forum = require("./forum");
const Post = require("./post");
const Comment = require("./comment");
const Text = require("./text");


let user1 = new User('nikold1234');
let user2 = new User ('anonymous1234');
let post1 = new Post('19/09/2021', "How to take care of an Orchid", "Unsure how many times to water it. Any suggestions?", user1);
let comment1 = new Comment('20/09/2021', post1.title, "They are hard to look after. Get a cactus instead.", user2);
let forumPage1 = new Forum(post1.title, "1", post1.content, comment1.content);
//let forumPage1 = new Forum(post1.title, "1", "some post content text", comment1.content);

console.log(forumPage1);
