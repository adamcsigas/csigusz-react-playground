import Button from './Button';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        // yet to be described
    },
    parameters: {
        docs: {
            // page: ButtonDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof Button> = function (args) {
    return (
        <Button onClick={() => {}}>Dummy text</Button>
    );
}

Base.storyName = 'Button';
