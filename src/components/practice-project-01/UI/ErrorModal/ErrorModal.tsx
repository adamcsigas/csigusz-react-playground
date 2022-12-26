import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from './ErrorModal.module.css';

export type ErrorModalTexts = {
    title: string,
    message: string,
}

type ErrorModalProps = ErrorModalTexts & {
    onConfirm: () => void,
};

const ErrorModal = (props: ErrorModalProps) => {
    const {
        title,
        message,
        onConfirm,
    } = props;
    return (
        <div>
            <div className={classes.backdrop} onClick={onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;
