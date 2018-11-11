export default class LibraryBook {
	public checkout(): this {
		// do checkout stuff
		console.log("Checking out a book.");
		return this;
	}

	public checkin(): this {
		// do checkin stuff
		console.log("Checking in a book.");
		return this;
	}
}
