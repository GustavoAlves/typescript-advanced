import LibraryBook from "./LibraryBook";

export default class ChildrensBook extends LibraryBook {
	public clean(): this {
		// clean the crayon marks
		console.log("Cleaning a book.");
		return this;
	}
}
