import React from 'react';

const Chips: React.FC = () => {
  return (
    <ul className="chips">
      <li className="chip chip-active">IT Academy</li>
      <li className="chip chip-inactive">Маркетинг</li>
      <li className="chip chip-inactive">Retail</li>
      <li className="chip chip-inactive">Остальные</li>
    </ul>
  );
};

export default Chips;