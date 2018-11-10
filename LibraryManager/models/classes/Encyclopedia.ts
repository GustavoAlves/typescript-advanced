import { ReferenceItem } from "./ReferenceItem";

export default class Encyclopedia extends ReferenceItem {

	constructor(newTitle: string, newYear: number, public edition: number) {
		super(newTitle, newYear);
	}

	public printItem(): void {
		super.printItem();
		console.log(`Edition: ${this.edition} (${this.year})`);
	}

	public printCitation(): void {
		console.log(`${this.title} - ${this.year}`);
	}
}
