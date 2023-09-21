

import { SocialLinks } from "@/components/common/SocialLinks";



export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                <h2>Feel free to connect!</h2>
                <SocialLinks />
                <GithubRepoLinkWrapper>
                    Interested in seeing this project&apos;s code?
                    <br />
                    <GithubRepoLink href="https://github.com/dixonormous23/alexdixon" target="_blank">
                        Check out the repo
                    </GithubRepoLink>
                </GithubRepoLinkWrapper>
                <p>Made with ❤ by Alex Dixon</p>
            </FooterInnerContainer>
        </FooterContainer>
    );
};
