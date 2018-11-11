import ChildrensBook from "../models/classes/ChildrensBook";
import EletronicBook from "../models/classes/EletronicBook";
import Employee from "../models/classes/Employee";
import LibraryBook from "../models/classes/LibraryBook";
import Researcher from "../models/classes/Researcher";
import * as util from "./../lib/utilityFunctions";
import "./../models/classes/LibrarianExtension";
import { ReferenceItem } from "./../models/classes/ReferenceItem";
import { UniversityLibrarian } from "./../models/classes/UniversityLibrarian";
import { Category } from "./../models/enums";
import { Author, Book, KeyValuePair, Librarian, Logger, Magazine } from "./../models/interfaces";

/**
 * Using Advanced Type features
 */
// Polymorphic *this* type
const kidbook = new ChildrensBook();
kidbook.checkin()
	.clean()
	.checkout();

const ebook = new EletronicBook();
ebook.checkin()
	.removeFromCustomerDevice()
	.checkout();

// Declaration Merging
// Interface merging
let mergedBook: Book;
mergedBook.publisher = "Programming Press";
mergedBook.hasIndex = true;

// Module augmentation
let newLibrarian = new UniversityLibrarian();
newLibrarian.hostSeminar("British Literature");
