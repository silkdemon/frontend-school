import React from "react";

interface ChipsProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

const Chips: React.FC<ChipsProps> = ({ currentCategory, onCategoryChange }) => {
  const categories = ["IT Academy", "Маркетинг", "Retail", "Остальные"];

  return (
    <ul className="chips">
      {categories.map((category) => (
        <li
          key={category}
          className={`chip ${
            currentCategory === category ? "chip-active" : "chip-inactive"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Chips;
