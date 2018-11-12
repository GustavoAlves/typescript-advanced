import { logger, writable } from "../decorators";
import * as Interfaces from "../interfaces";

// @logger
export class PublicLibrarian implements Interfaces.Librarian {
	public name: string;
	public email: string;
	public department: string;

	public assistCustomer(custName: string): void {
		console.info("Assisting customer.");
	}

	@writable(false)
	public teachCommunity(): void {
		console.log("Teaching community.");
	}
}
