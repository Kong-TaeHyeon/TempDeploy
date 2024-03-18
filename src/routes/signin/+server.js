import jwtHandler from '../../lib/jwtHandler.js';

// Login
export const POST = async ({ cookies, request }) => {
	const { id, password } = await request.json();

	if (id === 'kong3047') {
		const { jsonWebToken } = await jwtHandler.generateJWT({ email: id, password });
		await jwtHandler.setCookie({ cookies, jwt: jsonWebToken });

		// 응답 작성.
		const response = {
			message: 'Success',
			code: 200
		};
		return new Response(JSON.stringify(response));
	} else {
		const response = {
			message: 'Fail',
			code: 400
		};

		return new Response(JSON.stringify(response));
	}
};
