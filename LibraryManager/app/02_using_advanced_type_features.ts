import ChildrensBook from "../models/classes/ChildrensBook";
import EletronicBook from "../models/classes/EletronicBook";
import Employee from "../models/classes/Employee";
import LibraryBook from "../models/classes/LibraryBook";
import Researcher from "../models/classes/Researcher";
import * as util from "./../lib/utilityFunctions";
import "./../models/classes/LibrarianExtension";
import { PublicLibrarian } from "./../models/classes/PublicLibrarian";
import { ReferenceItem } from "./../models/classes/ReferenceItem";
import { CLASS_INFO, UniversityLibrarian } from "./../models/classes/UniversityLibrarian";
import { Category } from "./../models/enums";
import { Author, Book, KeyValuePair, Librarian, Logger, Magazine } from "./../models/interfaces";

/**
 * Using Advanced Type features
 */
// Polymorphic *this* type
// const kidbook = new ChildrensBook();
// kidbook.checkin()
// 	.clean()
// 	.checkout();

// const ebook = new EletronicBook();
// ebook.checkin()
// 	.removeFromCustomerDevice()
// 	.checkout();

// Declaration Merging
// Interface merging
// let mergedBook: Book;
// mergedBook.publisher = "Programming Press";
// mergedBook.hasIndex = true;

// Module augmentation: useful for extends third party code that you may not be responsible for maintaining
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.hostSeminar("British Literature");

// Type Guards
function logVisitor(param: number | string) {
	if (typeof param === "number") {
		console.log(`${param} new visitors arrived.`);
	} else {
		console.log(`${param.toUpperCase()} visited.`);
	}
}

// logVisitor("Leigh Ann");
// logVisitor(4);

// let lib: Librarian;
// // lib = new UniversityLibrarian();
// lib = new PublicLibrarian();

// if (lib instanceof UniversityLibrarian) {
// 	lib.assistFaculty();
// }
// if (lib instanceof PublicLibrarian) {
// 	lib.teachCommunity();
// }

// Custom Type Guards
function isBook(text: Book | Magazine): text is Book {
	// text as Book : <Book> text
	return (text as Book).author !== undefined;
}

// let readingMaterial: Book | Magazine;
// readingMaterial = util.GetAllBooks()[0];
// // readingMaterial = util.GetAllMagazines()[0];

// if (isBook(readingMaterial)) {
// 	console.log(`The book's author is ${readingMaterial.author}.`);
// } else {
// 	console.log(`The magazine's publisher is ${readingMaterial.publisher}.`);
// }

// Symbols: new primitive datatype
const mySymbol = Symbol("first_symbol");
const anotherSymbol = Symbol("first_symbol");

// console.log(mySymbol === anotherSymbol);
// console.log(typeof mySymbol);

let myObject = {
	[mySymbol]: "value for my symbol key"
};

// console.log(myObject[mySymbol]);

let librarian = new UniversityLibrarian();
// librarian[CLASS_INFO]();

let librarianCustomer = {
	name: "Thorne",
	assistCustomer: (custName: string): void => console.log(`Assisting ${custName}.`)
};
if (librarianCustomer instanceof UniversityLibrarian) {
	console.log("A helpful librarian.");
} else {
	console.log("Not a librarian.");
}
