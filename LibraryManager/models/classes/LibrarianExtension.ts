import { UniversityLibrarian } from "./UniversityLibrarian";

declare module "./UniversityLibrarian" {
	interface UniversityLibrarian {
		phone: string;
		hostSeminar(topic: string): void;
	}
}

// UniversityLibrarian.prototype.hostSeminar = (topic: string): void =>  console.log("Hosting a seminar on " + topic);
