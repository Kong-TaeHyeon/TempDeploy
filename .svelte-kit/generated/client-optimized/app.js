export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [2];

export const dictionary = {
		"/(user)/analyze/charge": [3,[2]],
		"/(user)/analyze/decharge": [4,[2]],
		"/(user)/car/add": [5,[2]],
		"/(user)/car/search": [~6,[2]],
		"/(user)/charger/setting": [7,[2]],
		"/(user)/charger/status": [~8,[2]],
		"/(user)/dashboard": [~9,[2]],
		"/(user)/maintain/admin": [10,[2]],
		"/(user)/maintain/contact": [11,[2]],
		"/signin": [~12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';