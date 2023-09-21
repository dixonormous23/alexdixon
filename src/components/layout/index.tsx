import styled from 'styled-components';
import { Navbar } from './Navbar';
import { ProviderProps } from '../../../@types';
import { StyledComponentsRegistry } from '../../../lib/registry';
import { Meta } from '../Meta';
import { NavbarMenu } from './NavbarMenu';
import { Footer } from './Footer';

const MainContainer = styled.main`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
`;

export const AppLayout: React.FC<ProviderProps> = ({ children }) => {
    return (
        <StyledComponentsRegistry>
            <Meta />
            <MainContainer>
                <Navbar />
                <NavbarMenu />
                {children}
                <Footer />
            </MainContainer>
        </StyledComponentsRegistry>
    );
};
