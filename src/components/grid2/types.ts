const sizes = {
    auto: 768,
    extraSmall: 600,
    small: 600,
    medium: 768,
    large: 992,
    extraLarge: 1200,
}
export const mediaDevices = {
    auto: `only screen and (min-width: ${sizes.medium}px)`,
    xsm: `only screen and (max-width: ${sizes.extraSmall}px)`,
    sm: `only screen and (min-width: ${sizes.small}px)`,
    md: `only screen and (min-width: ${sizes.medium}px)`,
    lg: `only screen and (min-width: ${sizes.large}px)`,
    xlg: `only screen and (min-width: ${sizes.extraLarge}px)`,
};

export type MediaDevices = keyof typeof mediaDevices | 'auto';