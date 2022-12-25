import React, { ReactNode } from "react";
import classes from './Button.module.css';

type ButtonProps = {
    children: ReactNode,
    onClick: () => void,
    type?: 'submit' | 'reset' | 'button',
};

const Button = (props: ButtonProps) => {
    const {
        children,
        type,
        onClick,
    } = props;
    return (
        <button
            className={classes.button}
            type={type || 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button;
