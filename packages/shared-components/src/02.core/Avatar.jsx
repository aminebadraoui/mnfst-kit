import React from 'react';

const Avatar = ({ size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    return (
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
            <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export const AvatarDemo = () => {
    return (
        <div className="space-y-4">

            <div className="flex space-x-4">
                <Avatar size="sm" />
                <Avatar size="md" />
                <Avatar size="lg" />
            </div>
        </div>
    );
};

export default Avatar;