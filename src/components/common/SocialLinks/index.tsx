import styled from 'styled-components';
import { Icon } from '../Icons';

const SocialLinksWrapper = styled.div`
    width: 100%;
    display: flex;
    max-width: 150px;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;

const SocialLinkAnchor = styled.a`

`;

export const SocialLinks = (): React.ReactElement => {
    return (
        <SocialLinksWrapper>
            <SocialLinkAnchor>
                <Icon variant='email' />
            </SocialLinkAnchor>
            <SocialLinkAnchor href="https://www.github.com/dixonormous23" target="_blank">
                <Icon variant='github' />
            </SocialLinkAnchor>
            <SocialLinkAnchor href="https://www.linkedin.com/in/alex-dixon-dev/" target="_blank">
                <Icon variant='linked-in' />
            </SocialLinkAnchor>
        </SocialLinksWrapper>
    );
};
