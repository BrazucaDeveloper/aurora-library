import { regex } from './regex';

const { firstLetterOfEachWord } = regex;

export function capitalize(words: string): string {
	return words
		.toLowerCase()
		.replace(firstLetterOfEachWord, (char) => char.toUpperCase());
}
