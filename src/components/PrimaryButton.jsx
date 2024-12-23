import React from 'react';

const PrimaryButton = ({ label, onClick, width, variant, type }) => {

    if (variant === 'outlined') {
        return (
            <div className={`${width || 'w-fit'}`}>

                <button type={type} onClick={onClick} className='lg:text-base hover:shadow-lg hover:opacity-90 text-sm h-[42px] w-full px-6 border border-blue-600 text-blue-600 font-medium rounded'>
                    {label}
                </button>

            </div>
        )
    }

    return (
        <div className={`${width || 'w-fit'}`}>

            <button type={type} onClick={onClick} className='lg:text-base hover:shadow-lg hover:opacity-90 text-sm h-[42px] w-full px-6 bg-blue-600 text-white font-medium rounded'>
                {label}
            </button>

        </div>
    )
}

export default PrimaryButton