import { Route } from './+types/login';
import { LoginPage } from '@modules/auth/pages/login-page';

export async function loader({ request }: Route.LoaderArgs) { }

export default function Login() { return <LoginPage />; }

export async function action({ request }: Route.ActionArgs) { }
