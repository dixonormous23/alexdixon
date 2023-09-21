import React, { Fragment, createRef } from 'react';
import Image from 'next/image';

import { ContentContextConsumer, ContentSection } from "@/components/ContentSection"
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { portfolio, PortfolioItemInterface } from './portfolio';
import {
    PortfolioItemDetailsWrapper,
    PortfolioItemImage,
    PortfolioItemsContainer,
    PortfolioItemWrapper,
    PortfolioItemTitle,
    PortfolioStackWrapper
} from './styles';
import { useIsComponentVisible } from '@/hooks/useIsComponentVisible';

const PortfolioItem: React.FC<PortfolioItemInterface> = ({ image, title, stack, shortDescription, mobilePosition }) => {
    const itemRef = createRef<HTMLDivElement>();

    const isVisible = useIsComponentVisible(itemRef);

    return (
        <PortfolioItemWrapper $isVisible={isVisible} ref={itemRef}>
            <PortfolioItemImage $image={image} $mobilePosition={mobilePosition} role="img" />
            <PortfolioItemDetailsWrapper>
                <PortfolioItemTitle>{title}</PortfolioItemTitle>
                <p>{shortDescription}</p>
                <PortfolioStackWrapper>
                    {stack.map((item) => (
                        <Image
                            key={item}
                            src={`/skills/${item}.png`}
                            alt={item}
                            width={30}
                            height={30}
                        />
                    ))}
                </PortfolioStackWrapper>
            </PortfolioItemDetailsWrapper>
        </PortfolioItemWrapper>
    )
}

export const PortfolioSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId="portfolio" useVisibility>
            <ContentContextConsumer>
                {({ isVisible }) => (
                    <Fragment>
                        <UnderlinedText text='Portfolio' isVisible={isVisible} />
                        <PortfolioItemsContainer id="portfolio-container">
                            {portfolio.map((item) => <PortfolioItem key={item.title} {...item} />)}
                        </PortfolioItemsContainer>
                    </Fragment>
                )}
            </ContentContextConsumer>
        </ContentSection>
    );
};
