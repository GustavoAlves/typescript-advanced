import Employee from "../models/classes/Employee";
import Researcher from "../models/classes/Researcher";
import * as util from "./../lib/utilityFunctions";
import { ReferenceItem } from "./../models/classes/ReferenceItem";
import { UniversityLibrarian } from "./../models/classes/UniversityLibrarian";
import { Category } from "./../models/enums";
import { Author, Book, KeyValuePair, Librarian, Logger, Magazine } from "./../models/interfaces";

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

// Union Types
// function printIdentifier(id: string | number): void { }

const allBooks: Array<Book> = util.GetAllBooks();
const allMagazines: Array<Magazine> = util.GetAllMagazines();

function printTitle(item: PrintMaterial): void {
	console.log(item.title);
}

let readingMaterial: PrintMaterial;

readingMaterial = allBooks[0];
printTitle(readingMaterial);

readingMaterial = allMagazines[0];
printTitle(readingMaterial);

// Intersection Types
// function createCoolNewDevice(id: Phone & Tablet): void { console.log('Phablet is born'); }

let serialNovel: Serial;
// serialNovel = allBooks[0]; // Error: Property 'publisher' is missing in type 'Book'
// serialNovel = allMagazines[0]; // Error: Property 'id' is missing in type 'Magazine'.
serialNovel = {
	author: "Occasional Pen",
	available: true,
	category: Category.Fiction,
	id: 100,
	publisher: "Serial Press",
	title: "The Gradual Tale"
};

// Mixin
util.applyMixins(UniversityLibrarian, [Employee, Researcher]);
const newLibrarian = new UniversityLibrarian();
newLibrarian.doResearch("Computer Science");

// String literal type and Type Aliases
type Frequency = "daily" | "monthly" | "annually";
type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;

function getMagazineByFrequency(preferredFrequency: Frequency): void {
	// do something here
}
