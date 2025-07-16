"use client";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

const ChildrenWrapper = (props: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const queryObj: { [key: string]: string } = {};

  searchParams.forEach((value, key) => {
    queryObj[key] = value;
  });

  return <Fragment key={JSON.stringify(queryObj)}>{props.children}</Fragment>;
};

export default ChildrenWrapper;
