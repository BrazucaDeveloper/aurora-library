import { LoginPage } from '@app/features/login';

export async function loader({ request }: Route.LoaderArgs) { }

export default () => <LoginPage />

export async function action({ request }: Route.ActionArgs) { }
