import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { fn } from '@storybook/test';

import { HeaderStory } from './Header';

const meta = {
    title: 'Example/Header',
    component: HeaderStory,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],

    args: {
        onLogout: fn(),
    },
} satisfies Meta<typeof HeaderStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {
        links: [
            {
                linkTo: '/',
                linkTitle: 'All list',
            },
            {
                linkTo: '/create',
                linkTitle: 'Add list',
            },
            {
                linkTo: '/search',
                linkTitle: 'Search',
            },
        ],
        authToken: 'token',
    },
};

export const LoggedOut: Story = {
    args: {
        links: [
            {
                linkTo: '/',
                linkTitle: 'All list',
            },
            {
                linkTo: '/create',
                linkTitle: 'Add list',
            },
            {
                linkTo: '/search',
                linkTitle: 'Search',
            },
        ],
        authToken: null,
    },
};
