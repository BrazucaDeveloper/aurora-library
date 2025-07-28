import { LoginPage } from './page';
import type { Route } from './+types/route';

export async function loader({ request }: Route.LoaderArgs) { }

export default () => <LoginPage />

export async function action({ request }: Route.ActionArgs) {
  console.dir(await request.formData());
}
