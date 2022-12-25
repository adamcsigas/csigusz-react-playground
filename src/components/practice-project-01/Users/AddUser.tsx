import React, { SyntheticEvent } from "react";
import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";

type AddUserProps = {

};

const AddUser = (props: AddUserProps) => {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
}

export default AddUser;
