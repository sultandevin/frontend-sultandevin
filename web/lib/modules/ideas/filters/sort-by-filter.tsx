"use client";
import {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectItem,
  DropdownSelectTrigger,
  DropdownSelectValue,
} from "@/components/ui/dropdown-select";
import { SORT_BY_OPTIONS } from "@/lib/constants/filters";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SortByFilter = () => {
  const searchParams = useSearchParams();
  const queryObj: { [key: string]: string } = {};

  for (const [key, value] of searchParams.entries()) {
    if (key !== SORT_BY_OPTIONS[0].query) {
      queryObj[key] = value;
    }
  }

  const sortBy = searchParams.get(SORT_BY_OPTIONS[0].query) || "Newest";

  return (
    <DropdownSelect defaultValue={sortBy}>
      <DropdownSelectTrigger size="sm" className="w-[150px]">
        <DropdownSelectValue />
      </DropdownSelectTrigger>
      <DropdownSelectContent>
        {SORT_BY_OPTIONS.map((option) => (
          <Link
            key={option.value}
            href={{
              query: {
                ...queryObj,
                [option.query]: option.value,
              },
            }}
            replace
          >
            <DropdownSelectItem value={option.label}>
              {option.label}
            </DropdownSelectItem>
          </Link>
        ))}
      </DropdownSelectContent>
    </DropdownSelect>
  );
};

export default SortByFilter;
