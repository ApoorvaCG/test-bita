import React from "react";

interface DropdownItem {
  id: number;
  text: string;
  value: string;
}

interface DropdownProps {
  options: DropdownItem[];
  handleChange: (value: string) => void;
  selectedOption: string | null;
}

const DropDown: React.FC<DropdownProps> = ({
  handleChange,
  options,
  selectedOption,
}) => {
  return (
    <>
      <select
        aria-label="choose from dropdown"
        title="Filter tasks"
        value={selectedOption || 'all'}
        onChange={(e) => handleChange(e.target.value)}
        className="border rounded-lg px-3 py-1 "
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
