import { Category } from "./enums";
export { Book, DamageLogger as Logger, Author, Librarian, Magazine, ShelfItem, KeyValuePair };

interface Book {
	id: number;
	title: string;
	author: string;
	available: boolean;
	category: Category;
	pages?: number;
	markDamaged?: DamageLogger;
}

// interface Book {
// 	publisher: string;
// 	hasIndex: boolean;
// }

type DamageLogger = (reason: string) => void;

interface Person {
	name: string;
	email: string;
}

interface Author extends Person {
	numBooksPublished: number;
}

interface Librarian extends Person {
	department: string;
	assistCustomer: (custName: string) => void;
}

interface Magazine {
	title: string;
	publisher: string;
}

interface ShelfItem {
	title: string;
}

interface KeyValuePair<K, V> extends Array<K | V> {
	0: K;
	1: V;
}
