import { WorkspaceFallback } from '../_components/workspace-fallback';
import { DashboardPage } from './page';

export async function loader() {}

export function HydrateFallback() {
	return <WorkspaceFallback />;
}

export default () => <DashboardPage />;

export async function action() {}
