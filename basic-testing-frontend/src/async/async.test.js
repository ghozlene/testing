import { describe, expect, it } from 'vitest';
import { generateToken } from './async';

describe('generateToken()', () => {
	it('should return a token based on the email giving', () => {
		const testUserEmail = 'aaaa@aaa.com';

		generateToken(testUserEmail, (err, token) => {
			expect(token).toBeDefined();
		});
	});
});
