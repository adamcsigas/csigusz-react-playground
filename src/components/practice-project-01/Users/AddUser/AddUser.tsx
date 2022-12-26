import React, { SyntheticEvent, ChangeEvent, useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModal, { ErrorModalTexts } from "../../UI/ErrorModal/ErrorModal";

type AddUserProps = {
    onAddUser: (name: string, age: number) => void;
};

const AddUser = (props: AddUserProps) => {
    const { onAddUser } = props;
    const [userName, setUserName] = useState<string>('');
    const [userAge, setUserAge] = useState<string>('');
    const [error, setError] = useState<ErrorModalTexts | null>(null);

    const validateAddUserData = () => {
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
            return false;
        }

        if (+userAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)',
            });
            return false;
        }

        return true;
    }

    const resetForm = () => {
        setUserName('');
        setUserAge('');
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        if (!validateAddUserData()) {
            return;
        }

        onAddUser(userName, +userAge);
        resetForm();
    }

    const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleUserAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserAge(event.target.value);
    }

    const handleErrorModalClick = () => {
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={handleErrorModalClick}
            />}
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={userName || ''}
                        onChange={handleUserNameChange}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        id="age"
                        type="number"
                        value={userAge || ''}
                        onChange={handleUserAgeChange}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
