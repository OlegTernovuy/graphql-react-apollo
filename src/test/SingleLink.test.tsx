import { composeStory } from '@storybook/react';
import { render } from '@testing-library/react';
import { screen } from '@storybook/test';
import '@testing-library/jest-dom';

import Meta, { DefaultLink } from '../stories/SingleLink/SingleLink.stories';

const SingleDefaultLink = composeStory(DefaultLink, Meta);

describe('Storybook link component', () => {
    test('Should match a storybook DefaultLink component', () => {
        render(<SingleDefaultLink />);

        const isDefaultLink = screen.getByText(/some description/i);
        expect(isDefaultLink).toBeInTheDocument();
    });
});
