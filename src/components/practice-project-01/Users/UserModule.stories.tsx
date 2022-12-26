import UserModule from './UserModule';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import UserModuleDocs from './UserModuleDocs.mdx';

export default {
    title: 'Components/Users',
    component: UserModule,
    parameters: {
        docs: {
            // page: UserModuleDocs, yet to be added
        },
    },
} as Meta;

export const Base: ComponentStory<typeof UserModule> = function () {
    return (
        <UserModule />
    );
}

Base.storyName = 'UserModule';
