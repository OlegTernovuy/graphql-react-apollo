import type { Meta, StoryObj } from '@storybook/react';

import { SingleLink } from './SingleLink';

const meta = {
    title: 'Example/Link',
    component: SingleLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SingleLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLink: Story = {
    args: {
        link: {
            id: 'errg45f4g',
            createdAt: '2024',
            url: 'some url',
            description: 'some description',
        },
    },
};

export const ColorLink: Story = {
    args: {
        link: {
            id: 'errg45f4g',
            createdAt: '2024',
            url: 'some url',
            description: 'some description',
        },
        bgColor: '#1ea7fd',
    },
};
