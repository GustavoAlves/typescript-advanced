import LibraryBook from "./LibraryBook";

export default class EletronicBook extends LibraryBook {
	public removeFromCustomerDevice(): this {
		console.log("Removing book from customer's device.");
		return this;
	}
}
