import AddUser from './AddUser';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import AddUserDocs from './AddUserDocs.mdx';

export default {
    title: 'Components/AddUser',
    component: AddUser,
    parameters: {
        docs: {
            page: AddUserDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof AddUser> = function () {
    return (
        <AddUser />
    );
}

Base.storyName = 'AddUser';
