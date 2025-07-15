import { LoginPage } from '@app/modules/auth/ui/login-page';

export async function loader({ request }: Route.LoaderArgs) { }

export default function Login() { return <LoginPage />; }

export async function action({ request }: Route.ActionArgs) { }
