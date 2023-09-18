import { useEffect, useState, useMemo } from 'react';

import { StyledTypewriterText } from './styles';

interface TypewriterTextProps {
    text: string;
    delay?: number;
}

export const TypewriterText = ({ text, delay = 35 }: TypewriterTextProps): React.ReactElement => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [textToRender, setTextToRender] = useState<string>('');

    useEffect(() => {  
        if (text === undefined) return;
        
        let typeInterval: NodeJS.Timeout;
    
        if (currentIndex < text.length) {          
            typeInterval = setTimeout(() => {
                setTextToRender((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay)
        }

        return () => clearInterval(typeInterval);
    }, [currentIndex, text, delay, textToRender]);

    // Make the container height dynamic on text length
    const textHeight = useMemo(() => Math.floor(text?.length * 1.6), [text]);

    return <StyledTypewriterText $height={textHeight}>{textToRender}<small>|</small></StyledTypewriterText>;
};
