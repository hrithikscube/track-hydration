import React from 'react';

const Input = ({ value, name, type, handleChange, width, label }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <input
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className='h-[42px] px-3 border bg-transparent border-[#808080]/50 w-full lg:text-base text-sm outline-[#121212] rounded'
            />

        </div>
    )
}

export default Input