import { SkillItemInterface } from "../skills";
import { VisibilityStyleProps } from "../../../../../@types"; 
import { SkillItemWrapper, SkillItemImage } from "./styles";

export const SkillItem: React.FC<SkillItemInterface & VisibilityStyleProps> = ({ image, $isVisible, $delay }) => {
    return (
        <SkillItemWrapper>
            <SkillItemImage src={image} alt="skill" $isVisible={$isVisible} $delay={$delay} />
        </SkillItemWrapper>
    );
};
