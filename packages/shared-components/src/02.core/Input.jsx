import React, { useState } from "react";

const Input = React.forwardRef(({ placeholder, type, onChange, errors, ...props }, ref) => {
    const [hasText, setHasText] = useState(false)


    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        setHasText(inputValue.length > 0)

        if (onChange) {
            onChange(e);
        }
    }

    return (
        <div className="relative w-full rounded">
            <input className="border p-4 focus:outline-none w-full rounded peer "

                placeholder=" "
                type={type}
                onChange={handleInputChange}
                ref={ref}
                {...props}

            />

            {!hasText && <label className="text-gray-400 absolute top-4 left-4 pointer-events-none peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:-translate-x-2 duration-300 transition-all"> {placeholder}</label>}

            {errors && <label className="text-red-500 pl-4"> {errors.message} </label>}
        </div>
    );
})

export const InputDemo = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
        if (e.target.value.length < 3) {
            setError({ message: 'Input must be at least 3 characters long' });
        } else {
            setError(null);
        }
    };

    return (
        <div className="space-y-4">

            <Input
                placeholder="Enter text"
                type="text"
                onChange={handleChange}
                errors={error}
                value={value}
            />
            <p>Current value: {value}</p>
        </div>
    );
};

export default Input;