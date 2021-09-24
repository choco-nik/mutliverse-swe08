//posts - title, date, author, text = comment (with a title)
//comments - date, author,text
//comment+post import text as they extend
// testing
//seperate files for each class (Text, {})

const Text = require("./text");

class Comment extends Text {
    super() {
    this.date = date;
    this.title = title;
    this.content = commentContent;
    this.author = author;
    }
}

module.exports = Comment; 

//forum pages - page name, count_of_comments

