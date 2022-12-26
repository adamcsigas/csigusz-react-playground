import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";

export type User = {
    name: string,
    age: number,
}

type UsersListProps = {
    users: User[],
};

// responsible for out putting user data
const UsersList = (props: UsersListProps) => {
    const { users } = props;

    const listOfUsers = (
        users.map((user,index) => {
            return (<li key={index}>{user.name} ({user.age} years old)</li>);
        })
    );

    return(
        <Card className={classes.users}>
            <ul>
                {listOfUsers}
            </ul>
        </Card>
    )
}

export default UsersList;
