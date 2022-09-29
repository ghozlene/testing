import { expect, it } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

it('should throw and error if value not a string  ', () => {
	const input = {};
	const input2 = 1;
	const resultFn = () => {
		validateStringNotEmpty(input);
		validateStringNotEmpty(input2);
	};
	expect(resultFn).toThrow();
});

it('should throw an error if a non numeric value is provided ', () => {
	const input = '1';
	const validatFn = () => {
		validateNumber(input);
	};
	expect(validatFn).toThrow();
});
