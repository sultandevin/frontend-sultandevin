"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface DropdownSelectProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
}

interface DropdownSelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface DropdownSelectContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownSelectTriggerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const DropdownSelectContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
  selectedValue: "",
  setSelectedValue: () => {},
});

const DropdownSelect = ({
  children,
  defaultValue,
  className,
}: DropdownSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownSelectContext.Provider
      value={{ isOpen, setIsOpen, selectedValue, setSelectedValue }}
    >
      <div className={cn("relative", className)} ref={dropdownRef}>
        {children}
      </div>
    </DropdownSelectContext.Provider>
  );
};

const DropdownSelectTrigger = ({
  children,
  className,
  size = "md",
}: DropdownSelectTriggerProps) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownSelectContext);

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-3 text-sm",
    lg: "h-12 px-4 text-base",
  };

  return (
    <button
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex w-full items-center justify-between rounded-2xl border text-sm transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        className,
      )}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 opacity-50 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
};

const DropdownSelectContent = ({
  children,
  className,
}: DropdownSelectContentProps) => {
  const { isOpen } = React.useContext(DropdownSelectContext);

  return (
    <div
      className={cn(
        "bg-popover text-popover-foreground absolute z-50 mt-1 w-full min-w-[8rem] space-y-1 overflow-hidden rounded-2xl border p-1 shadow-md transition-all duration-200 ease-in-out",
        isOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-1 scale-95 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

const DropdownSelectItem = ({
  children,
  value,
  className,
}: DropdownSelectItemProps) => {
  const { setIsOpen, selectedValue, setSelectedValue } = React.useContext(
    DropdownSelectContext,
  );

  return (
    <div
      className={cn(
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center rounded-2xl px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        selectedValue === value && "bg-accent text-accent-foreground",
        className,
      )}
      onClick={() => {
        setSelectedValue(value);
        setIsOpen(false);
      }}
    >
      {children}
    </div>
  );
};

const DropdownSelectValue = ({
  placeholder,
  value,
}: {
  placeholder?: string;
  value?: string;
}) => {
  const { selectedValue } = React.useContext(DropdownSelectContext);

  return (
    <span className="block truncate">
      {value || selectedValue || placeholder}
    </span>
  );
};

export {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectItem,
  DropdownSelectTrigger,
  DropdownSelectValue,
};
