// Select.jsx
import React from 'react';

const Select = ({ options, ...props }) => (
  <select {...props}>
    {options && options.map((opt, idx) => (
      <option key={idx} value={opt.value}>{opt.label}</option>
    ))}
  </select>
);

export default Select;
