import jwtHandler from './lib/jwtHandler';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	// 요청에 JWT 가 있는지 확인.
	let jwt = event.cookies.get('AuthorizationToken');

	// JWT 가 있는 경우.

	if (jwt) {
		// JWT Validation 확인
		jwt = event.cookies.get('AuthorizationToken').split('Bearer ')[1];

		let { data } = await jwtHandler.checkValidationJWT({ token: jwt });

		// 토큰에 기입된 유저 정보를 저장.
		if (data) {
			event.locals.user = data;
			return resolve(event);
		} else {
			jwtHandler.deleteTokenInCookie({ cookies: event.cookies });
			return redirect(301, '/signin');
		}
	}
	// JWT 가 없는 경우.
	else {
		if (event.url.pathname !== '/signin') return redirect(301, '/signin');
	}

	return resolve(event);
};
