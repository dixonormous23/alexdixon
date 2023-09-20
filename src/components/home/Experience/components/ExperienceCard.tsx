import Image from "next/image";

import { ExperienceItemInterface } from "../experience";
import { VisibilityStyleProps } from "../../../../../@types";
import {
    ExperienceItemDetailsWrapper,
    ExperienceItemInnerWrapper,
    ExperienceItemLeftContainer,
    ExperienceItemWrapper,
    CompanyDetailsWrapper,
    ExperienceItemRightContainer
} from './styles';


export const ExperienceItem: React.FC<ExperienceItemInterface & VisibilityStyleProps> = ({
    image,
    companyName,
    jobTitle,
    jobDescription,
    timePeriod,
    $isVisible,
    $delay
}) => {
    return (
        <ExperienceItemWrapper $isVisible={$isVisible} $delay={$delay}>
            <ExperienceItemInnerWrapper>
                <ExperienceItemLeftContainer>
                    <strong>{jobTitle}</strong>
                    <ExperienceItemDetailsWrapper>
                        <CompanyDetailsWrapper>
                            <Image src={image} alt={companyName} width={20} height={20} />
                            <span>{companyName}</span>
                        </CompanyDetailsWrapper>
                        <small>{timePeriod}</small>
                    </ExperienceItemDetailsWrapper>
                </ExperienceItemLeftContainer>
                <ExperienceItemRightContainer>
                    <h3>{companyName}</h3>
                    <p>{jobDescription}</p>
                </ExperienceItemRightContainer>
            </ExperienceItemInnerWrapper>
        </ExperienceItemWrapper>
    );
};