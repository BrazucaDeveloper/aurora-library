import type { Route } from './+types/route';
import { LoginPage } from './page';

export async function loader({ request }: Route.LoaderArgs) {}

export default () => <LoginPage />;

export async function action({ request }: Route.ActionArgs) {
	console.dir(await request.formData());
}
