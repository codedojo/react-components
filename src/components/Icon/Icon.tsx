import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';
import { getSizeValue, getFontVariationSettings } from './utils';

export type IconProps = {
    name?: string;
    type?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
    size?: 'smaller' | 'small' | 'medium' | 'large' | 'larger';
    weight?: number | string;
    grade?: number | string;
    filled?: boolean;
    light?: boolean;
    dark?: boolean;
    inactive?: boolean;

    as?: 'i';
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

const Icon = forwardRef<HTMLElement, IconProps>(({
    name,
    type = 'outlined',
    size,
    weight,
    grade,
    filled = false,
    light = false,
    dark = false,
    inactive = false,

    as: Component = 'i',
    children = name,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.ROOT}--${type}`]: type,
        [`${cssClasses.ROOT}--${size}`]: size,
        [cssClasses.LIGHT]: light,
        [cssClasses.DARK]: dark,
        [cssClasses.INACTIVE]: inactive
    }, className);

    const fontVariationSettings = getFontVariationSettings(filled, weight, grade, getSizeValue(size));
    const style = fontVariationSettings ? {
        fontVariationSettings
    } : undefined;

    return (
        <Component
            ref={ref}
            style={style}
            className={classNames}
            {...props}
        >
            {children}
        </Component>
    );
});

Icon.displayName = 'Icon';

export default Icon;