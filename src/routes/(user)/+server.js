import jwtHandler from '../../lib/jwtHandler.js';

export const DELETE = async ({ cookies }) => {
	jwtHandler.deleteTokenInCookie({ cookies });
	return new Response(
		JSON.stringify({
			code: 200,
			message: 'Success'
		})
	);
};
