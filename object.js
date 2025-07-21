
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    displaySummary: function() {
        console.log(`${this.title} by ${this.author}`);
    }
};

book.displaySummary();
