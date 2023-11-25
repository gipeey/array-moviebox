"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const FormSelect = ({
  label,
  id,
  name,
  required = false,
  value,
}: {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  value?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-2 grid grid-cols-3 max-w-xl items-center relative">
      <label htmlFor={id} className="text-gray-900">
        {label}
        {required && <span className="text-rose-700">*</span>}
      </label>
      <select
        name={name}
        id={id}
        className="col-span-2 bg-gray-200 appearance-none px-3 h-10 rounded-md focus-visible:outline-1 focus-visible:outline-gray-400"
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        required={required}
      >
        <option value="Movie" selected={value === "Movie" ? true : false}>
          Movie
        </option>
        <option
          value="Tv Series"
          selected={value === "Tv Series" ? true : false}
        >
          Tv Series
        </option>
      </select>
      <ChevronDownIcon
        className={`h-4 w-4 absolute right-3 text-gray-900 transition-all duration-300 ${
          isExpanded && "rotate-180"
        }`}
      />
    </div>
  );
};

export default FormSelect;
