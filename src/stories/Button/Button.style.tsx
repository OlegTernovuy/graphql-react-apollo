import styled from 'styled-components';

const ButtonWrapper = styled.button<{
    primary: boolean;
    backgroundColor?: string;
    size: 'small' | 'medium' | 'large';
}>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    background-color: ${({ backgroundColor, primary }) =>
        backgroundColor || (primary ? '#1ea7fd' : 'transparent')};
    color: ${({ primary }) => (primary ? 'white' : '#333')};
    box-shadow: ${({ primary }) =>
        primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
    font-size: ${({ size }) =>
        size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px'};
    padding: ${({ size }) =>
        size === 'small'
            ? '10px 16px'
            : size === 'medium'
              ? '11px 20px'
              : '12px 24px'};
`;

export { ButtonWrapper };
