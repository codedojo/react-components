export const strings = {
    XMLNS: 'http://www.w3.org/2000/svg'
};

export enum Size {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
};

export const sizeProps = {
    large: {
        viewBox: 48,
        radius: 18,
        strokeWidth: 4,
        strokeDasharray: 113.097
    },
    medium: {
        viewBox: 32,
        radius: 12.5,
        strokeWidth: 3,
        strokeDasharray: 78.54
    },
    small: {
        viewBox: 24,
        radius: 8.75,
        strokeWidth: 2.5,
        strokeDasharray: 54.978
    }
};

export const cssClasses = {
    ROOT: 'ui-CircularProgress',
    CONTAINER: 'ui-CircularProgress__container',
    CIRCLE_GRAPHIC: 'ui-CircularProgress__circle-graphic',
    TRACK: 'ui-CircularProgress__track',
    CIRCLE: 'ui-CircularProgress__circle',

    SMALL: 'ui-CircularProgress--small',
    MEDIUM: 'ui-CircularProgress--medium',
    LARGE: 'ui-CircularProgress--large'
};