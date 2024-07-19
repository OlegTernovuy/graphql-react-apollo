import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    gap: 1.5rem;
    margin: 0 auto;
    padding: 1.5rem;
    > * {
        text-decoration: none;
        color: grey;
    }
`;

const LogoutButton = styled.div`
    cursor: pointer;
`;

export { HeaderDiv, LogoutButton };
