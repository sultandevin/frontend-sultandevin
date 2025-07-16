export const PER_PAGE_OPTIONS = [
  {
    query: "page[size]",
    value: "10",
  },
  {
    query: "page[size]",
    value: "30",
  },
  {
    query: "page[size]",
    value: "50",
  },
];

export const SORT_BY_OPTIONS = [
  {
    label: "Oldest",
    query: "sort",
    value: "-published_at",
  },
  {
    label: "Newest",
    query: "sort",
    value: "published_at",
  },
];
