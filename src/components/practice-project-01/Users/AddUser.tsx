import React, { SyntheticEvent, ChangeEvent, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";

type AddUserProps = {

};

const AddUser = (props: AddUserProps) => {
    const [userName, setUserName] = useState<string>('');
    const [userAge, setUserAge] = useState<string>('');

    const resetForm = () => {
        setUserName('');
        setUserAge('');
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(userName, userAge);
        resetForm();
    }

    const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleUserAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserAge(event.target.value);
    }

    return(
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
    );
}

export default AddUser;
