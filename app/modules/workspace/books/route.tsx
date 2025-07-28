import { BooksPage } from './page';
import { WorkspaceFallback } from '../_components/workspace-fallback';

export async function clientLoader() { }

export function HydrateFallback() {
  return <WorkspaceFallback />;
}

export default () => <BooksPage />

export async function action() { }
