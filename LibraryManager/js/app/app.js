"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./../lib/utilityFunctions");
// console.log("Hello Advanced TypeScript course on Pluralsight");
/**
 * Going Further with Bacic Types
 */
// Destructuring arrays
var medals = ["gold", "silver", "bronze"];
var first = medals[0], second = medals[1], third = medals[2];
// Destructuring objects
var person = {
    address: "123 Main Street",
    name: "Audrey",
    phone: "555-1212"
};
var address = person.address, name = person.name, phone = person.phone;
// function printBookInfo(item: Book): void {
// 	console.log(`${item.title} was authored by ${item.author}`);
// }
function printBookInfo(_a) {
    var booktitle = _a.title, bookauthor = _a.author;
    console.log(booktitle + " was authored by " + bookauthor);
}
// function logFavoriteBooks([book1, book2]: Array<Book>): void {
// 	printBookInfo(book1);
// 	printBookInfo(book2);
// }
function logFavoriteBooks(_a) {
    var books = _a.slice(0);
    books.forEach(function (book) { return printBookInfo(book); });
}
// logFavoriteBooks(util.GetAllBooks());
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
var booktitle = book1.title, bookauthor = book1.author;
console.log(booktitle);
console.log(bookauthor);
// printBookInfo(book1);
//# sourceMappingURL=app.js.map