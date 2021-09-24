//const User = require("./user");
// forum is an extention of posts?



class Forum {
    static definition = "this is a forum for Gardening"
    constructor(title, page, postContent, commentContent) {
    this.title = title;
    this.page = page;
    this.post = postContent;
    this.comment = commentContent;
    }
}

module.exports = Forum;
