import { FC, ReactNode } from 'react';
import {
    Text as FluentText,
    TextProps as FluentTextProps,
    TextPresetProps,
    Display,
    LargeTitle,
    Title1,
    Title2,
    Title3,
    Subtitle1,
    Subtitle2,
    Body1,
    Body2,
    Caption1,
    Caption2
} from '@fluentui/react-components';
import classnames from 'classnames';

const ComponentsByType: Record<string, FC<TextPresetProps>> = {
    'display': Display,
    'title1': LargeTitle,
    'title2': Title1,
    'title3': Title2,
    'title4': Title3,
    'subtitle1': Subtitle1,
    'subtitle2': Subtitle2,
    'body1': Body1,
    'body2': Body2,
    'caption1': Caption1,
    'caption2': Caption2
};

const ElementsByType: Record<string, FluentTextProps['as']> = {
    'display': 'p',
    'title1': 'p',
    'title2': 'p',
    'title3': 'p',
    'title4': 'p',
    'subtitle1': 'p',
    'subtitle2': 'p',
    'body1': 'p',
    'body2': 'p',
    'caption1': 'span',
    'caption2': 'span'
};

export type TextProps = Omit<FluentTextProps, 'type' | 'content'> & {
    type?: 'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption1' | 'caption2';
    content?: ReactNode;
};

export default function Text({
    type = 'body2',
    content,

    children = content,
    className,
    ...props
}: TextProps) {
    const Component = ComponentsByType[type] || FluentText;
    const classNames = classnames(className, 'ui-Text');

    return (
        <Component
            as={ElementsByType[type] || undefined}
            className={classNames}
            {...props}
        >
            {children}
        </Component>
    );
}