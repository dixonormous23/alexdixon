export const useScrollToComponent = () => {
    const scrollToComponent = (anchor: string, scrollOffset?: number) => {
        const SCROLL_OFFSET = scrollOffset ?? 180;
        const anchorPosition = document.getElementById(anchor)?.getBoundingClientRect()?.top ?? null;
    
        if (anchorPosition) {
            const scrollDestination = anchorPosition - SCROLL_OFFSET + window.scrollY;
            window.scrollTo({ behavior: 'smooth', top: scrollDestination });
        }
    }
    return { scrollToComponent };
}