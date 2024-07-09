import styled from 'styled-components';

const LinkWrapper = styled.header<{ bgColor?: string }>`
    border: 1px solid;
    border-radius: 0.3rem;
    padding: 0.5rem;
    background-color: ${({ bgColor }) => bgColor};
`;

export { LinkWrapper };
