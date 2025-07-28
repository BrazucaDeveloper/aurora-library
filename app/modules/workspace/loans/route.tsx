import { WorkspaceFallback } from '../_components/workspace-fallback';
import { LoansPage } from './page';

export async function clientLoader() {}

export function HydrateFallback() {
	return <WorkspaceFallback />;
}

export default () => <LoansPage />;

export async function action() {}
