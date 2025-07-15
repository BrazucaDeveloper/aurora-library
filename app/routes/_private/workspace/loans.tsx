import { LoansPage } from '@modules/loans/pages/loans-page';

export async function loader() { }

export default function Loans(props: Route.ComponentProps) {
	return <LoansPage {...props} />;
}

export async function action() { }
