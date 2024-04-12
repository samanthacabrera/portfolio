import React from 'react';
import { useState } from 'react';

const Toggle = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <div className="fixed bottom-0 left-0 p-4">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-input hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
};

export default Toggle;

