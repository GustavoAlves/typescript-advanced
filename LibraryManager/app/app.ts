import { Category } from "./../models/enums";
import { Author, Book, Librarian, Logger, Magazine } from "./../models/interfaces";

import * as util from "./../lib/utilityFunctions";
import { ReferenceItem } from "./../models/classes/ReferenceItem";

// console.log("Hello Advanced TypeScript course on Pluralsight");

/**
 * Going Further with Bacic Types
 */

// Destructuring arrays
const medals: Array<string> = ["gold", "silver", "bronze"];
const [first, second, third] = medals;

// Destructuring objects
const person = {
	address: "123 Main Street",
	name: "Audrey",
	phone: "555-1212"
};
const { address, name, phone } = person;

// function printBookInfo(item: Book): void {
// 	console.log(`${item.title} was authored by ${item.author}`);
// }

function printBookInfo({ title: booktitle, author: bookauthor }: Book): void {
	console.log(`${booktitle} was authored by ${bookauthor}`);
}

// function logFavoriteBooks([book1, book2]: Array<Book>): void {
// 	printBookInfo(book1);
// 	printBookInfo(book2);
// }

function logFavoriteBooks([...books]: Array<Book>): void {
	books.forEach(book => printBookInfo(book));
}

// logFavoriteBooks(util.GetAllBooks());

const [book1, book2] = util.GetAllBooks();
const { title: booktitle, author: bookauthor } = book1;
console.log(booktitle);
console.log(bookauthor);

// printBookInfo(book1);
