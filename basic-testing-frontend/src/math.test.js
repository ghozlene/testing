import { expect, it } from 'vitest';
import { add } from './math';
it('should summarize all number in an array ', () => {
	//Arrange
	const numbers = [1, 2, 3];

	//Act
	const result = add(numbers);
	//Assert
	const expectResult = numbers.reduce((prevValue, curValue) => {
		prevValue + curValue;
	}, 0);
	expect(result).toBe(expectResult);
});
