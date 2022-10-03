import { describe, expect, it } from 'vitest';
import { generateToken } from './async';

describe('generateToken()', () => {
	it('should return a token based on the email giving', (done) => {
		const testUserEmail = 'aaaa@aaa.com';

		generateToken(testUserEmail, (err, token) => {
			//
			try {
				//expect(token).toBe(1);
				expect(token).toBeDefined();
				done();
			} catch (error) {
				done(error);
			}
		});
	});
});
