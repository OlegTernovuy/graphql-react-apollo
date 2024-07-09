import styled from 'styled-components';

const InputStyled = styled.input<{ border: boolean }>`
    all: unset;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 0.3rem;

    &:focus {
        border-color: ${({ border }) => (border ? '#1ea7fd' : '')};
        outline: none;
    }
`;

export { InputStyled };
