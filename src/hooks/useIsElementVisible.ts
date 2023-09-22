import { useState, useEffect, MutableRefObject } from 'react';

export function useIsElementVisible<T = any>(ref: MutableRefObject<T> | any, keepMounted?: boolean) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hasRendered, setHasRendered] = useState<boolean>(false);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
            if (ref.current) {
                observer?.observe(ref.current);
            }
            
            return () => observer.disconnect();
        }
    }, [ref]);

    useEffect(() => {
        if (isVisible && !hasRendered && keepMounted) {
            setHasRendered(true);
        }
    }, [isVisible, hasRendered, keepMounted]);

    return keepMounted ? (isVisible || hasRendered) : isVisible;
};
