import jwt from 'jsonwebtoken';

import { env } from '$env/dynamic/public';

class JwtHandler {
	async checkValidationJWT({ token }) {
		const secretKey = 'kong';

		try {
			const data = jwt.verify(token, secretKey);
			return { data };
		} catch (err) {
			console.error('JWT Verify Error : ', err);
			return { err };
		}
	}

	async generateJWT({ email, password }) {
		const secretKey = 'kong';

		const jsonWebToken = jwt.sign(
			{
				email,
				password,
				name: '공태현',
				userId: 1
			},
			secretKey,
			{
				expiresIn: '30m'
			}
		);

		return { jsonWebToken };
	}

	async deleteTokenInCookie({ cookies }) {
		cookies.delete('AuthorizationToken', { path: '/' });
	}

	async setCookie({ cookies, jwt }) {
		cookies.set('AuthorizationToken', `Bearer ${jwt}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 // 1시간.
		});
	}
}

export default new JwtHandler();
