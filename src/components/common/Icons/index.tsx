import { useMemo } from 'react';
import styled from "styled-components";

import { EmailIcon } from './EmailIcon';
import { GithubIcon } from './GithubIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { HomeIcon } from './HomeIcon';
import { MenuIcon } from './MenuIcon';
import { CloseIcon } from './CloseIcon';
import { NotFoundIcon } from './404';

type IconVariant =
    'email' |
    'github' |
    'linked-in' |
    'home' |
    'menu' |
    'close' | 
    '404'
;

interface IconProps {
    variant: IconVariant;
    width?: number;
    defaultActive?: boolean;
}

const IconWrapper = styled.div<Pick<IconProps, 'width' | 'defaultActive'>>`
    svg {
        transition: 0.2s;
        opacity: ${(props) => props.defaultActive ? 1 : 0.5};
        width: ${(props) => props.width}px;
        height: ${(props) => props.width}px;
        fill: ${({ theme }) => theme.colors.text};
    }

    svg:hover {
        opacity: 1;
    }
`;

export const Icon: React.FC<IconProps> = ({ variant, width = 30, defaultActive = false }) => {
    const icon: JSX.Element| null = useMemo(() => {
        switch (variant) {
            case 'email': 
                return <EmailIcon />;
            case 'github':
                return <GithubIcon />;
            case 'linked-in':
                return <LinkedInIcon />;
            case 'home':
                return <HomeIcon />;
            case 'menu':
                return <MenuIcon />;
            case 'close':
                return <CloseIcon />;
            case '404': 
                return <NotFoundIcon />;
            default: 
                return null;
        }
    }, [variant]);

    return (
        <IconWrapper width={width} defaultActive={defaultActive}>{icon}</IconWrapper>
    );
};
