import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

type WithTheme = {
    theme: DefaultTheme;
};

export const font = (value: 0) => (props: WithTheme): string =>
    props.theme.fonts[value];

export const palette = (palette: keyof DefaultTheme['colors']['palettes']) => (
    props: WithTheme
): string => props.theme.colors.palettes[palette];

export const textPalette = (color: keyof DefaultTheme['colors']['text']) => (
    props: WithTheme
): string => props.theme.colors.text[color];

export const backgroundPalette = (
    color: keyof DefaultTheme['colors']['background']
) => (props: WithTheme): string => props.theme.colors.background[color];

type IfPropValue = number | string | FlattenSimpleInterpolation | undefined;

type IfProp = {
    <T extends unknown>(
        test: keyof T,
        ifTrue: (props: WithTheme) => string,
        ifFalse?: (props: WithTheme) => string
    ): (props: T & WithTheme) => () => string | undefined;
    <T extends unknown>(
        test: keyof T,
        ifTrue: IfPropValue,
        ifFalse?: IfPropValue
    ): (props: T) => () => IfPropValue | undefined;
};

export const ifProp: IfProp = (test: any, ifTrue: any, ifFalse: any) => (
    props: any
) => () => {
    const isTrue = props && typeof test === 'string' && props[test];
    const value = isTrue ? ifTrue : ifFalse;
    return typeof value === 'function' ? value(props) : value;
};
