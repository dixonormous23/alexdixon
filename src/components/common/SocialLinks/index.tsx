import styled from 'styled-components';

import { Icon } from '../Icons';
import { CONTACT_EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK } from '@/constants';

const SocialLinksWrapper = styled.div`
    width: 100%;
    display: flex;
    max-width: 150px;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;

const SocialLinkAnchor = styled.a``;

export const SocialLinks = (): React.ReactElement => {
    return (
        <SocialLinksWrapper>
            <SocialLinkAnchor href={`mailto:${CONTACT_EMAIL_ADDRESS}`}>
                <Icon variant="email" />
            </SocialLinkAnchor>
            <SocialLinkAnchor href={GITHUB_LINK} target="_blank">
                <Icon variant="github" />
            </SocialLinkAnchor>
            <SocialLinkAnchor href={LINKEDIN_LINK} target="_blank">
                <Icon variant="linked-in" />
            </SocialLinkAnchor>
        </SocialLinksWrapper>
    );
};
