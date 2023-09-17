import { useEffect, useState } from 'react';

import { StyledTypewriterText } from './styles';

interface TypewriterTextProps {
    text: string;
    delay?: number;
}

export const TypewriterText = ({ text, delay = 75 }: TypewriterTextProps): React.ReactElement => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [textToRender, setTextToRender] = useState<string>('')

    useEffect(() => {
        if (text === undefined) return;

        const textInterval = setInterval(() => {
            if (currentIndex < text.length) {          
                setTextToRender((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, delay);

        return () => clearInterval(textInterval)
    }, [currentIndex, text, delay, textToRender]);

    return <StyledTypewriterText>{textToRender}<small>|</small></StyledTypewriterText>;
};
