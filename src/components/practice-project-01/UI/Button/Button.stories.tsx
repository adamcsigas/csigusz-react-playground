import Button from './Button';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        buttonText: {
            control: {
                type: 'text',
            },
            defaultValue: 'some text',
        },
    },
    parameters: {
        docs: {
            // page: ButtonDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof Button> = function (args) {
    const { buttonText } = args;
    return (
        <Button buttonText={buttonText} />
    );
}

Base.storyName = 'Button';
