import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

export function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Aurora Library</title>
				<Meta />
				<Links />
			</head>
			<body className="antialiased">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function Root() {
	return <Outlet />;
}
