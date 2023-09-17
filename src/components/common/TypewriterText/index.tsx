import { useEffect, useState } from 'react';

import { StyledTypewriterText } from './styles';

interface TypewriterTextProps {
    text: string;
}

export const TypewriterText = ({ text }: TypewriterTextProps): React.ReactElement => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [textToRender, setTextToRender] = useState<string>('')

    useEffect(() => {
        if (text === undefined) return;

        const textInterval = setInterval(() => {
            if (currentIndex < text.length) {          
                setTextToRender((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, 50);

        return () => clearInterval(textInterval)
    }, [currentIndex, text, textToRender]);

    return <StyledTypewriterText>{textToRender}<small>|</small></StyledTypewriterText>;
};
