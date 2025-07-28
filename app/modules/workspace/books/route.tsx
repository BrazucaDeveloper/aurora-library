import { WorkspaceFallback } from '../_components/workspace-fallback';
import { BooksPage } from './page';

export async function clientLoader() {}

export function HydrateFallback() {
	return <WorkspaceFallback />;
}

export default () => <BooksPage />;

export async function action() {}
