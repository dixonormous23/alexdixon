import styled from 'styled-components';
import { Navbar } from './Navbar';
import { ProviderProps } from '../../../@types';
import { StyledComponentsRegistry } from '../../../lib/registry';

const MainContainer = styled.main`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
`;

export const AppLayout: React.FC<ProviderProps> = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <MainContainer>
                <Navbar />
                {children}
            </MainContainer>
        </StyledComponentsRegistry>
    );
};
