import { useState, useEffect, MutableRefObject } from 'react';

export function useIsComponentVisible<T = any>(ref: MutableRefObject<T> | any) {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
            if (ref.current) {
                observer?.observe(ref.current);
            }
            return () => observer.disconnect();
        
        }
    }, [ref]);

    return isVisible;
};
