"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Label } from "./label";
import { cn } from "../../lib/utils";

type CustomOnlyDateSelectorProps = {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  onChange: (date: Date) => void;
  error?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export function CustomOnlyDateSelector({
  label,
  value,
  onChange,
  error,
  placeholder = "Select a date",
  disabled,
  className = "",
}: CustomOnlyDateSelectorProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <Label>{label}</Label>}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="border"
            className={cn(
              "w-full justify-start text-left font-normal dark:bg-gray-800 dark:hover:bg-gray-900",
              !value && "text-muted-foreground",
              className
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 dark:bg-gray-900 dark:border-gray-800"
          align="start"
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => date && onChange(date)}
            className="p-3 rounded-lg border"
            captionLayout="dropdown"
            
          />
        </PopoverContent>
      </Popover>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
