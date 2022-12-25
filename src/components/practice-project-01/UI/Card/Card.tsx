import React, { ReactNode } from "react";
import classes from './Card.module.css';
import clsx from 'clsx';

type CardProps = {
    children: ReactNode,
    className: string,
};

const Card = (props: CardProps) => {
    const { children, className } = props;
    const cardStyle = clsx(className, classes.card);

    return (
        <div className={cardStyle}>
            {children}
        </div>
    )
}
export default Card;
