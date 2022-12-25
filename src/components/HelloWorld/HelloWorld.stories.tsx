import HelloWorld from './HelloWorld';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import HelloWorldDocs from './helloWorldDocs.mdx';

export default {
    title: 'Components/HelloWorld',
    component: HelloWorld,
    parameters: {
        docs: {
            page: HelloWorldDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof HelloWorld> = function () {
    return (
        <HelloWorld />
    );
}

Base.storyName = 'HelloWorld';
