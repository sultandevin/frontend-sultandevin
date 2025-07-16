import {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectItem,
  DropdownSelectTrigger,
  DropdownSelectValue,
} from "@/components/ui/dropdown-select";
import { SORT_BY_OPTIONS } from "@/lib/constants/filters";
import { ApiResponse } from "@/lib/types/suitmedia-api";
import Link from "next/link";

const SortByFilter = (props: { posts: ApiResponse }) => {
  return (
    <DropdownSelect defaultValue="Newest">
      <DropdownSelectTrigger size="sm" className="w-[150px]">
        <DropdownSelectValue />
      </DropdownSelectTrigger>
      <DropdownSelectContent>
        {SORT_BY_OPTIONS.map((option) => (
          <Link
            key={option.value}
            href={{
              query: {
                [option.query]: option.value,
              },
            }}
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
