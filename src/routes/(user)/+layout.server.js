import { redirect } from '@sveltejs/kit';
export const load = ({ url, locals }) => {
	return { user: locals.user };
};
