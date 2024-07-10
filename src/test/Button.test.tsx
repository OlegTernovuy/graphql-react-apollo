import { fireEvent, screen } from '@storybook/test';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import '@testing-library/jest-dom';

import Meta, { Primary } from '../stories/Button/Button.stories';

const StorybookPrimaryButton = composeStory(Primary, Meta);

describe('Storybook Button component', () => {
    it('Should render Button with correct label', () => {
        render(<StorybookPrimaryButton />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent('Button');
    });

    it('Should call onClick when button is clicked', () => {
        render(<StorybookPrimaryButton />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(Meta.args.onClick).toHaveBeenCalledTimes(1);
    });

    it('Should apply correct background color', () => {
        render(<StorybookPrimaryButton />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle({ color: 'white' });
    });
});
