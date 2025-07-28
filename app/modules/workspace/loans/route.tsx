import { LoansPage } from './page';
import { WorkspaceFallback } from '../_components/workspace-fallback';

export async function clientLoader() { }

export function HydrateFallback() {
  return <WorkspaceFallback />;
}

export default () => <LoansPage />

export async function action() { }
