import styled from 'styled-components';
import { Navbar } from './Navbar';
import { ProviderProps } from '../../../@types';
import { StyledComponentsRegistry } from '../../../lib/registry';
import { Meta } from '../Meta';

const MainContainer = styled.main`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    // background-image: radial-gradient(circle, rgba(51, 153, 255, 0.05) 92%, transparent);
`;

export const AppLayout: React.FC<ProviderProps> = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <Meta />
            <MainContainer>
                <Navbar />
                {children}
            </MainContainer>
        </StyledComponentsRegistry>
    );
};
