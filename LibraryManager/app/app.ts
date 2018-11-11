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
 * Creating and Using Decorators
 */
// // Class decorator
// function uielement(target: Function) { /* do ui stuff here */ }
// // Method decorator
// function deprecated(t: any, p: string, d: PropertyDescriptor) {
// 	console.log("This method will go away soon.");
// }

// @uielement
// class ContactForm {
// 	@deprecated
// 	public someOldMethod(): void { console.log("Old method call."); }
// }

// Decorator factory
// function uielement(element: string) {
// 	return (target: Function): void => console.log(`Creating new element ${element}.`);
// }

// @uielement("SimpleContactForm")
// class ContactForm {
// 	// contact properties
// }

let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();
