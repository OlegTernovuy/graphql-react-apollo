import { fireEvent, screen } from '@storybook/test';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import '@testing-library/jest-dom';

import Meta, { LoggedIn, LoggedOut } from '../stories/Header/Header.stories';

const StorybookLoggedInHeader = composeStory(LoggedIn, Meta);
const StorybookLoggedOutHeader = composeStory(LoggedOut, Meta);

describe('Storybook header component', () => {
    it('Should render Header with links when logged in', () => {
        render(<StorybookLoggedInHeader />);
        expect(screen.getByText('logout')).toBeInTheDocument();
    });

    it('Should render Header with links when logged out', () => {
        render(<StorybookLoggedOutHeader />);
        expect(screen.queryByText('logout')).not.toBeInTheDocument();
    });

    it('Should call onLogout when logout button is clicked', () => {
        render(<StorybookLoggedInHeader />);
        const logoutButton = screen.getByText('logout');
        fireEvent.click(logoutButton);
        expect(Meta.args.onLogout).toHaveBeenCalledTimes(1);
    });
});
