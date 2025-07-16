export interface Post {
	id: number;
	title: string;
	slug: string;
	content: string | React.ReactNode;
	published_at: string;
	created_at: string;
	deleted_at: string | null;
	updated_at: string;
}

/**
 * Represents the pagination links for direct navigation.
 */
export interface Links {
	first: string | null;
	last: string | null;
	prev: string | null;
	next: string | null;
}

/**
 * Represents a single link object within the meta section,
 * often used for building pagination UI components.
 */
export interface MetaLink {
	url: string | null;
	label: string;
	active: boolean;
}

/**
 * Contains metadata about the paginated response.
 */
export interface Meta {
	current_page: number;
	from: number;
	last_page: number;
	links: MetaLink[];
	path: string;
	per_page: number;
	to: number;
	total: number;
}

/**
 * The main interface for the entire API response.
 */
export interface ApiResponse {
	data: Post[];
	links: Links;
	meta: Meta;
}
