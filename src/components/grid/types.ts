const sizes = {
    auto: 768,
    extraSmall: 600,
    small: 600,
    medium: 768,
    large: 992,
    extraLarge: 1200,
}
export const mediaDevices = {
    auto: `(min-width: ${sizes.medium}px)`,
    xsm: `(max-width: ${sizes.extraSmall}px)`,
    sm: `(min-width: ${sizes.small}px)`,
    md: `(min-width: ${sizes.medium}px)`,
    lg: `(min-width: ${sizes.large}px)`,
    xlg: `(min-width: ${sizes.extraLarge}px)`,
};

export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
export type MediaDevices = keyof typeof mediaDevices;