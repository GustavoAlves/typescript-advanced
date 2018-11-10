import * as Interfaces from "../interfaces";

class UniversityLibrarian implements Interfaces.Librarian {

	public name: string;
	public email: string;
	public department: string;

	public assistCustomer(custName: string) {
		console.info(this.name + " is assisting " + custName);
	}
}
