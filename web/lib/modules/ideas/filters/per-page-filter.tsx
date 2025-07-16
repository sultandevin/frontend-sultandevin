"use client";
import {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectItem,
  DropdownSelectTrigger,
  DropdownSelectValue,
} from "@/components/ui/dropdown-select";
import { PER_PAGE_OPTIONS } from "@/lib/constants/filters";
import { ApiResponse } from "@/lib/types/suitmedia-api";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PerPageFilter = (props: { posts: ApiResponse }) => {
  const searchParams = useSearchParams();
  const queryObj: { [key: string]: string } = {};

  for (const [key, value] of searchParams.entries()) {
    if (key !== PER_PAGE_OPTIONS[0].query) {
      queryObj[key] = value;
    }
  }

  return (
    <DropdownSelect defaultValue={props.posts.meta.per_page.toString()}>
      <DropdownSelectTrigger size="sm" className="w-[150px]">
        <DropdownSelectValue />
      </DropdownSelectTrigger>
      <DropdownSelectContent>
        {PER_PAGE_OPTIONS.map((option) => (
          <Link
            key={option.value}
            href={{
              query: {
                ...queryObj,
                [option.query]: option.value,
              },
            }}
          >
            <DropdownSelectItem value={option.value}>
              {option.value}
            </DropdownSelectItem>
          </Link>
        ))}
      </DropdownSelectContent>
    </DropdownSelect>
  );
};

export default PerPageFilter;
