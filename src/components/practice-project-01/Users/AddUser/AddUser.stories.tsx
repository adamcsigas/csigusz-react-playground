import AddUser from './AddUser';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import AddUserDocs from './AddUserDocs.mdx';

export default {
    title: 'Components/Users/AddUser',
    component: AddUser,
    argTypes: {
        onAddUser: {
            action: 'onAddUser clicked',
        },
    },
    parameters: {
        docs: {
            page: AddUserDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof AddUser> = function (args) {
    const { onAddUser } = args;
    return (
        <AddUser onAddUser={onAddUser} />
    );
}

Base.storyName = 'AddUser';
