import { FC, ReactNode } from 'react';
import {
    TextProps as FluentTextProps,
    Display,
    LargeTitle,
    Title1,
    Title2,
    Title3,
    Subtitle1,
    Subtitle2
} from '@fluentui/react-components';
import classnames from 'classnames';

const ComponentsByType: Record<string, FC<HeadingProps>> = {
    'display': Display as FC<HeadingProps>,
    'title1': LargeTitle as FC<HeadingProps>,
    'title2': Title1 as FC<HeadingProps>,
    'title3': Title2 as FC<HeadingProps>,
    'title4': Title3 as FC<HeadingProps>,
    'subtitle1': Subtitle1 as FC<HeadingProps>,
    'subtitle2': Subtitle2 as FC<HeadingProps>
};

const ElementsByType: Record<string, FluentTextProps['as']> = {
    'display': 'h1',
    'title1': 'h1',
    'title2': 'h2',
    'title3': 'h3',
    'title4': 'h4',
    'subtitle1': 'h5',
    'subtitle2': 'h6'
};

export type HeadingProps = Omit<FluentTextProps, 'type' | 'content'> & {
    type?: 'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'subtitle1' | 'subtitle2';
    content?: ReactNode;
};

export default function Heading({
    type = 'title2',
    content,

    children = content,
    className,
    ...props
}: HeadingProps) {
    const Component = ComponentsByType[type];
    const classNames = classnames(className, 'ui-Heading');

    return (
        <Component
            as={ElementsByType[type] || 'h2'}
            className={classNames}
            block
            {...props}
        >
            {children}
        </Component>
    );
}