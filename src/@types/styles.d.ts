import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: [string];
        colors: {
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
            background: {
                primary: string;
                secondary: string;
            };
            palettes: {
                primary: string;
            };
        };
    }
}
