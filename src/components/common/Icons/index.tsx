import { useMemo } from 'react';
import styled from "styled-components";

import { EmailIcon } from './EmailIcon';
import { GithubIcon } from './GithubIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { HomeIcon } from './HomeIcon';
import { MenuIcon } from './MenuIcon';
import { CloseIcon } from './CloseIcon';

type IconVariant =
    'email' | 'github' | 'linked-in' | 'home' | 'menu' | 'close';

interface IconProps {
    variant: IconVariant;
    width?: number;
}

const IconWrapper = styled.div<Pick<IconProps, 'width'>>`
    svg {
        opacity: 0.5;
        transition: 0.2s;
        width: ${(props) => props.width}px;
        fill: ${({ theme }) => theme.colors.text};
    }

    svg:hover {
        opacity: 1;
    }
`;

export const Icon: React.FC<IconProps> = ({ variant, width = 30 }) => {
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
            default: 
                return null;
        }
    }, [variant]);

    return (
        <IconWrapper width={width}>{icon}</IconWrapper>
    );
};
