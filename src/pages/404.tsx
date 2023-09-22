import { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@/components/layout";
import { Icon } from "@/components/common/Icons";
import Link from "next/link";

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`;

const InnerContainer = styled.div`
    margin-top: 5rem;
    text-align: center;
    height: 100%;
`;

const NotFoundCopyContainer = styled.div`
    margin-top: 3rem;

    strong {
        font-size: 2rem;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const NotFoundPage: NextPage = () => {
    return (
        <NotFoundContainer>
            <InnerContainer>
                <Icon variant="404" width={300} defaultActive />
                <NotFoundCopyContainer>
                    <strong>
                        Country roads take me <Link href="/">home</Link>
                    </strong>
                </NotFoundCopyContainer>
            </InnerContainer>
        </NotFoundContainer>
    );
};

export default NotFoundPage;