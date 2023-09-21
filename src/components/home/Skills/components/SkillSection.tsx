import { createRef } from "react";

import { useIsComponentVisible } from "@/hooks/useIsComponentVisible";
import { SkillSectionsInterface } from "../skills";
import { SkillItem } from "./SkillItem";
import { SkillSection, SkillTitle, SkillItemSection, SkillItemWrapper } from "./styles";

export const SkillItemsSection = ({ title, data }: SkillSectionsInterface) => {
    const skillsSectionRef = createRef<HTMLDivElement>();
    const isSkillSectionVisible = useIsComponentVisible(skillsSectionRef);

    return (
        <SkillSection ref={skillsSectionRef}>
            <SkillTitle>{title}</SkillTitle>
            <SkillItemSection>
                {data.map((item, i) => {
                    if (isSkillSectionVisible) {
                        return <SkillItem key={item.image} $isVisible={isSkillSectionVisible} $delay={i / 3} {...item} />
                    }
                    return <SkillItemWrapper key={item.image} />
                })}
            </SkillItemSection>
        </SkillSection>
    );
};