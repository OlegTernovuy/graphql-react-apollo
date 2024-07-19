import { fireEvent, screen } from '@storybook/test';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import '@testing-library/jest-dom';

import Meta, { DefaultInput } from '../stories/Input/Input.stories';

const StorybookDefaultInput = composeStory(DefaultInput, Meta);

describe('Storybook input component', () => {
    it('Should render DefaultInput with correct placeholder', () => {
        render(<StorybookDefaultInput />);
        const inputElement = screen.getByPlaceholderText('Enter text...');
        expect(inputElement).toBeInTheDocument();
    });
    it('Should call onChange when input value changes', () => {
        const handleChange = jest.fn();
        render(<StorybookDefaultInput onChange={handleChange} />);
        const inputElement = screen.getByPlaceholderText('Enter text...');
        fireEvent.change(inputElement, { target: { value: 'new value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
