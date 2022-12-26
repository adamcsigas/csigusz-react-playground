import React, { useState } from "react";
import AddUser from "./AddUser/AddUser";
import UsersList, { User } from "./UsersList/UsersList";

// this is a good example for what does "lifting the state up" means
const UserModule = () => {
    const [userList, setUserList] = useState<User[]>([]);

    const handleAddUser = (userName: string, userAge: number) => {
        // setUserList relies on previous state, so the previous state passed here
        setUserList((prevUserList => {
            return [...prevUserList, { name: userName, age: userAge }];
        }));
    };

    return(
        <div>
            <AddUser onAddUser={handleAddUser} />
            <UsersList users={userList} />
        </div>
    );
}

export default UserModule;
