import { describe, expect, it } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
	it('should throw and error if value not a string  ', () => {
		const input = {};
		const input2 = 1;
		const resultFn = () => {
			validateStringNotEmpty(input);
			validateStringNotEmpty(input2);
		};
		expect(resultFn).toThrow();
	});
});

describe('validateNumber()', () => {
	it('should throw an error if a non numeric value is provided ', () => {
		const input = '1';
		const validatFn = () => {
			validateNumber(input);
		};
		expect(validatFn).toThrow();
	});
});
