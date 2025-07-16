"use client";
import {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectItem,
  DropdownSelectTrigger,
  DropdownSelectValue,
} from "@/components/ui/dropdown-select";
import { PER_PAGE_OPTIONS } from "@/lib/constants/filters";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PerPageFilter = () => {
  const searchParams = useSearchParams();
  const queryObj: { [key: string]: string } = {};

  for (const [key, value] of searchParams.entries()) {
    if (key !== PER_PAGE_OPTIONS[0].query) {
      queryObj[key] = value;
    }
  }

  // Always reset to first page
  queryObj["page[number]"] = "1";

  const perPage = searchParams.get(PER_PAGE_OPTIONS[0].query) || "30";

  return (
    <DropdownSelect defaultValue={perPage}>
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
            replace
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
