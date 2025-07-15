import { BooksPage } from '@modules/books/pages/books-page';

export async function loader() { }

export default function Books(props: Route.ComponentProps) {
	return <BooksPage {...props} />;
}

export async function action() { }
