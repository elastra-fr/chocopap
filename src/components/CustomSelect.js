import React from 'react';

const CustomSelect = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (event) => {
        const selectedOption = event.target.value;
    };

    return (
        <select onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;

