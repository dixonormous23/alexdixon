import React, { useState, useLayoutEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { ProviderProps } from '../@types';

export const StyledComponentsRegistry: React.FC<ProviderProps> = ({ children }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    const [styledComponentsStyleSheet] = useState<ServerStyleSheet>(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (typeof window !== 'undefined') return <>{children}</>

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
};
