export const load = ({ locals, url }) => {
	// 주차 타워 ID.

	const id = parseInt(url.searchParams.get('id'));

	return { id };
};
