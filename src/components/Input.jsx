import React from 'react';

const Input = ({ value, name, type, handleChange, width, label, required }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <input
                placeholder={label}
                type={type}
                required={required}
                name={name}
                value={value}
                onChange={handleChange}
                className='h-[42px] px-3 border bg-transparent border-[#808080]/50 w-full lg:text-sm text-sm outline-[#121212] rounded'
            />

        </div>
    )
}

export default Input