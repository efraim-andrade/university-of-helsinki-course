import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
    display: ${props => props.isHidden ? 'none' : 'block'};
`
