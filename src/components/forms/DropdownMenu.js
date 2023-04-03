import React, {useState} from 'react';

const DropdownMenu = ({options, defaultText, onChange}) => {
    const [selectedValue, setSelectedValue] = useState(null);

    function handleSelectChange(event) {
        const value = event.target.value;
        setSelectedValue(value);
        onChange(value);
    }

    return (
        <select value={selectedValue} onChange={handleSelectChange}>
            <option value="">{defaultText}</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;