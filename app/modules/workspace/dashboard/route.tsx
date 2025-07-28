import { DashboardPage } from "./page";
import { WorkspaceFallback } from "../_components/workspace-fallback";

export async function loader() {}

export function HydrateFallback() {
  return <WorkspaceFallback />;
}

export default () => <DashboardPage />

export async function action() {}
