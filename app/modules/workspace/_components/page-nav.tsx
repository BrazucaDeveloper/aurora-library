import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@shadcn-ui/pagination';

import { NavLink } from 'react-router';

interface PageNavProps {
	current: number;
	total: number;
	perPage?: number;
	offset?: number;
}

export function PageNav({
	current,
	total,
	perPage = 11,
	offset = 5,
}: PageNavProps) {
	const lastPage = Math.ceil(total / perPage);
	const hasArrowButtons = lastPage > offset;

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						className={
							hasArrowButtons === false ? 'opacity-50 pointer-events-none' : ''
						}
						href={
							hasArrowButtons
								? `?page=${current - 1 <= 0 ? 1 : current - 1}`
								: ''
						}
					/>
				</PaginationItem>

				{Array.from({ length: offset }, (_, index) => (
					<PaginationItem key={`pagination_${Math.random()}`}>
						<NavLink
							to={`?page=${index + 1}`}
							className={`${current === index + 1 ? 'outline outline-foreground/20 bg-muted' : ''} hover:outline hover:outline-foreground/10 hover:bg-muted rounded px-3 py-1.5 h-12 mx-1 shadow text-sm transition-all`}
						>
							{index + 1}
						</NavLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext
						className={
							hasArrowButtons === false ? 'opacity-50 pointer-events-none' : ''
						}
						href={`?page=${current + 1 >= lastPage ? lastPage : current + 1}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
