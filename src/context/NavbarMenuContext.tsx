import { createContext, useState, useContext, useEffect } from "react";
import { ProviderProps } from "../../@types";

interface NavbarContextInterface {
    open: boolean;
    toggleOpen: () => void;
}

export const NavbarMenuContext = createContext(undefined as unknown as NavbarContextInterface);

export const NavbarMenuContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => setOpen(!open);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflowY = open ? 'hidden' : 'auto';
            document.body.style.touchAction = open ? 'none' : 'auto';
        }
    }, [open]);

    return (
        <NavbarMenuContext.Provider value={{ open, toggleOpen }}>
            {children}
        </NavbarMenuContext.Provider>
    );
};

export const useNavbarMenuContext = (): NavbarContextInterface => {
    const context = useContext(NavbarMenuContext);
    return context;
};
