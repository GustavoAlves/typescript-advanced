import { logger, sealed, writable } from "../decorators";
import * as Interfaces from "../interfaces";
import Employee from "./Employee";
import Researcher from "./Researcher";

export const CLASS_INFO = Symbol();

// @logger
// @sealed("UniversityLibrarian")
export class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
	public static [Symbol.hasInstance](obj: object): boolean {
		return obj.hasOwnProperty("name") && obj.hasOwnProperty("assistCustomer");
	}

	public name: string;
	public email: string;
	public department: string;

	// implementation of the following to be provided by the mixing function
	public title: string;
	public addToSchedule: () => void;
	public logTitle: () => void;
	public doResearch: (topic: string) => void;

	public assistCustomer(custName: string) {
		console.info(this.name + " is assisting " + custName);
	}

	@writable(true)
	public assistFaculty(): void {
		console.log("Assisting faculty.");
	}

	public [CLASS_INFO](): void {
		console.log("This class represents a UniversityLibrarian.");
	}
}
