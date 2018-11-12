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
 * Implementing Asynchronous Patterns
 */
// Callback Functions
type LibMgrCallback = (err: Error, titles: Array<string>) => void;

function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {
	setTimeout(() => {
		try {
			const foundBooks: Array<string> = util.GetBookTitlesByCategory(cat);

			if (foundBooks.length > 0) {
				callback(null, foundBooks);
			} else {
				throw new Error("No books found.");
			}
		} catch (err) {
			callback(err, null);
		}
	}, 2000);
}

function logCategorySearch(err: Error, titles: Array<string>): void {
	if (err) {
		console.log(`Error message: ${err.message}`);
	} else {
		console.log(`Found the following titles: ${titles}`);
	}
}

console.log("Beginnig search...");
getBooksByCategory(Category.Biography, logCategorySearch);
console.log("Search submitted...");
