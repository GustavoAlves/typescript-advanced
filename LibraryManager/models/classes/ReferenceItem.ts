export { ReferenceItem };

abstract class ReferenceItem {
	public static department: string = "Research";
	private _publisher: string;

	constructor(public title: string, protected year: number) {
		console.log("Creating a new ReferenceItem...");
	}

	public printItem(): void {
		console.log(`${this.title} was published in ${this.year}.`);
		console.log(`Department: ${ReferenceItem.department}`);
	}

	get publisher(): string {
		return this._publisher.toUpperCase();
	}

	set publisher(newPublisher: string) {
		this._publisher = newPublisher;
	}

	public abstract printCitation(): void;
}
