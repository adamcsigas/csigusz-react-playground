import UsersList, { User } from './UsersList';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import AddUserDocs from '../AddUser/AddUserDocs.mdx';

const mockUserData: User[] = [
    {
        name: 'kaki',
        age: 12,
    },
    {
        name: 'maki',
        age: 21,
    }
]

export default {
    title: 'Components/Users/UsersList',
    component: UsersList,
    parameters: {
        docs: {
            // page: UsersListDocs, yet to be added
        },
    },
} as Meta;

export const Base: ComponentStory<typeof UsersList> = function () {
    return (
        <UsersList users={mockUserData} />
    );
}

Base.storyName = 'UsersList';
