import 'styled-components';
import styledTheme from './globalTheme';

type ThemeType = typeof styledTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}