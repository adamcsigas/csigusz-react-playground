import ErrorModal from './ErrorModal';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/ErrorModal',
    component: ErrorModal,
    argTypes: {
        title: {
            control: {
                type: 'text',
            },
            defaultValue: 'Some title text',
        },
        message: {
            control: {
                type: 'text',
            },
            defaultValue: 'Some message text',
        }
    },
    parameters: {
        docs: {
            // page: ButtonDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof ErrorModal> = function (args) {
    const { title, message } = args;
    return (
        <ErrorModal title={title} message={message} />
    );
}

Base.storyName = 'ErrorModal';
