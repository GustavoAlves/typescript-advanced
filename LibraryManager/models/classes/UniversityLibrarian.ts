import * as Interfaces from "../interfaces";
import Employee from "./Employee";
import Researcher from "./Researcher";

export class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
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

	public assistFaculty(): void {
		console.log("Assisting faculty.");
	}
}
