import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from '@react-router/dev/routes';

export default [
	layout('layouts/auth.layout.tsx', [index('modules/login/route.tsx')]),

	route('/my-account', 'modules/my-account/route.tsx'),

	...prefix('workspace', [
		layout('layouts/workspace.layout.tsx', [
			route('/dashboard', 'modules/workspace/dashboard/route.tsx'),
			route('/clients', 'modules/workspace/clients/route.tsx'),
			route('/books', 'modules/workspace/books/route.tsx'),
			route('/loans', 'modules/workspace/loans/route.tsx'),
		]),
	]),
] satisfies RouteConfig;
