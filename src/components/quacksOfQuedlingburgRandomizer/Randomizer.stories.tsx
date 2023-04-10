import Randomizer from './Randomizer';
import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/QuacksOfQuedlingBurg/Randomizer',
    component: Randomizer,
    parameters: {
        docs: {
            // page: RandomizerDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof Randomizer> = function () {
    return (
        <Randomizer />
    );
}

Base.storyName = 'Randomizer';
