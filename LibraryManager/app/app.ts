import ChildrensBook from "../models/classes/ChildrensBook";
import EletronicBook from "../models/classes/EletronicBook";
import Employee from "../models/classes/Employee";
import LibraryBook from "../models/classes/LibraryBook";
import Researcher from "../models/classes/Researcher";
import * as util from "./../lib/utilityFunctions";
import "./../models/classes/LibrarianExtension";
import { PublicLibrarian } from "./../models/classes/PublicLibrarian";
import { ReferenceItem } from "./../models/classes/ReferenceItem";
import { UniversityLibrarian } from "./../models/classes/UniversityLibrarian";
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

let lib: Librarian;
// lib = new UniversityLibrarian();
lib = new PublicLibrarian();

if (lib instanceof UniversityLibrarian) {
	lib.assistFaculty();
}
if (lib instanceof PublicLibrarian) {
	lib.teachCommunity();
}
