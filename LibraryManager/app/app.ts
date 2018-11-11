import { Category } from "./../models/enums";
import { Author, Book, KeyValuePair, Librarian, Logger, Magazine } from "./../models/interfaces";

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
// const { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);

// printBookInfo(book1);

// The Spread Operator
const schoolBooks: Array<Book> = [
	{ id: 10, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true, category: Category.Fiction },
	{ id: 11, title: "Crime and Punishment", author: "Fyodor Dostoevsky", available: true, category: Category.Fiction },
	{ id: 12, title: "Clear Light of Day", author: "Anita Desai", available: true, category: Category.Fiction }
];

const booksRead: Array<Book> = util.GetAllBooks();
booksRead.push(...schoolBooks);

const poets: Array<string> = ["Shelley", "Collins", "Hughes"];
const authors: Array<string> = ["Tolstoy", "Fitzgerald", ...poets];

// Tuple Types
// let catalogLocation: [string, Book] = ["A 123.456", book1];
// catalogLocation[2] = "B 147.258"; // [ts] Index '2' is out-of-bounds in tuple of length 2.
// catalogLocation[2] = true; // [ts] Type 'true' is not assignable to type 'string | Book'.

const catalogLocation: KeyValuePair<string, Book> = ["A 123.456", book1];
catalogLocation[2] = "B 147.258"; // OK
