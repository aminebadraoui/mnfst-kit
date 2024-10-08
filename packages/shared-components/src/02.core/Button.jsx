import React from 'react'

const Button = ({
    title,
    onClick,
    outline,
    disabled,
    className
}) => {

    return <button className={`
       ${className}
        p-2 w-full font-semibold hover:opacity-95 rounded 
        ${outline ? `bg-white border-[1px] border-black text-black` : ` bg-primary-500 text-white`}
        ${disabled ? 'opacity-75' : 'opacity-100'}
        ${disabled ? 'cursor-not-allowed' : ''}`
    }
        onClick={onClick}
        disabled={disabled} >
        {title}
    </button >
}

// Demo component for Button
export const ButtonDemo = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="space-y-4 w-80">
                <div className="space-y-2">
                    <Button title="Default Button" onClick={() => alert('Default clicked!')} />
                    <Button title="Outline Button" onClick={() => alert('Outline clicked!')} outline />
                    <Button title="Disabled Button" onClick={() => alert('This should not alert')} disabled />
                    <Button title="Custom Class" onClick={() => alert('Custom class clicked!')} className="bg-green-500 text-white" />
                </div>
            </div>

        </div>

    );
};

export default Button;