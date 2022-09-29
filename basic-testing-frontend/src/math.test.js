import { expect, it } from 'vitest';
import { add } from './math';
it('should summarize all number in an array ', () => {
	//Arrange
	const numbers = [1, 2, 3];

	//Act
	const result = add(numbers);
	//Assert
	const expectResult = numbers.reduce(
		(prevValue, curValue) => prevValue + curValue,
		0
	);
	expect(result).toBe(expectResult);
});

it('should yield NaN if at lease one invalid number is provided ', () => {
	//	Arrange
	const inputs = ['invalid', 1];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided ', () => {
	const inputs = ['1', '2', '3'];

	const result = add(inputs);

	const expectResult = inputs.reduce(
		(prevValue, curValue) => +prevValue + +curValue,
		0
	);
	expect(result).toBe(expectResult);
});

it('should yield 0 if an empty array is provided', () => {
	const numbers = [];

	const result = add(numbers);

	expect(result).toBe(0);
});

it('should throw an error if no value is passed to function', () => {
	const resultFn = () => {
		add();
	};

	expect(resultFn).toThrow();
});
