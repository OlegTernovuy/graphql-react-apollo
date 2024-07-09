import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

const meta = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        border: { control: 'boolean' },
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
    args: {
        name: 'example',
        value: '',
        type: 'text',
        placeholder: 'Enter text...',
        border: false,
        onChange: action('changed'),
    },
};

export const ActiveInput: Story = {
    args: {
        name: 'example',
        value: 'input with border',
        type: 'text',
        placeholder: 'Enter text...',
        border: true,
        onChange: action('changed'),
    },
};
