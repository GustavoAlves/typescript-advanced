import * as Interfaces from "../interfaces";

export class PublicLibrarian implements Interfaces.Librarian {
	public name: string;
	public email: string;
	public department: string;

	public assistCustomer(custName: string): void {
		console.info("Assisting customer.");
	}

	public teachCommunity(): void {
		console.log("Teaching community.");
	}
}
