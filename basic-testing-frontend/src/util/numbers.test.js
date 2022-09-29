import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('should return a number', () => {
	const object = '12';
	const result = transformToNumber(object);

	expect(result).toBe(12);
});

it('should yield NaN for non-transformable number', () => {
	const input = 'invalid';
	const result = transformToNumber(input);
	expect(result).toBeNaN();
});
