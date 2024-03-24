import React, { useState, useEffect } from 'react';

const SelectQuantite = ({ quantity, onQuantityChange }) => {
  const [inputValue, setInputValue] = useState(quantity ? quantity.toString() : '');

  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);


  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onQuantityChange(parseInt(value, 10)); // Assurez-vous que la valeur est un entier
  };

  return (
    <input className=' border-black w-10 text-center rounded-lg mx-4'
      type="number"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default SelectQuantite;
