import React from 'react';

const SelectInput = ({ value, name, options, handleChange, width, label }) => {
    return (
        <div className={`${width || 'w-full'} relative`}>
            <select
                placeholder={label}
                name={name}
                value={value}
                onChange={handleChange}
                className='h-[42px] px-3 pr-10 border border-[#808080]/50 w-full lg:text-base text-sm outline-[#121212] rounded bg-transparent appearance-none'
            >
                <option value="" disabled>{label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5L6 9.5L11 4.5H1Z" fill="#808080" />
                </svg>
            </div>
        </div>
    );
};

export default SelectInput;