import React from 'react';

const Button = ({ onClick, className, children }) => (
    <div>
        <i
            className={className}
            onClick={onClick}
        >
            {children}
        </i>
    </div>
);

export default Button;