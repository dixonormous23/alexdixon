import 'styled-components';
import { MainTheme } from '../styles/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends MainTheme { }
}
