import { FC, ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';

import type { HTMLDivProps, PropsWithChildren } from '@/types';
import { classnames as cn } from '@/utils';

import FlexItem, { FlexItemProps } from './FlexItem';

export type FlexProps = PropsWithChildren<{
    as?: 'div';
    dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
    gap?: 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';
    inline?: boolean;
    wrap?: boolean;
}, HTMLDivProps>;

type FlexFC = ForwardRefExoticComponent<FlexProps & RefAttributes<HTMLDivElement>> & {
    Item?: FC<FlexItemProps>;
};

const Flex: FlexFC = forwardRef<HTMLDivElement, FlexProps>(({
    dir = 'row',
    align,
    justify,
    gap,
    inline,
    wrap,

    as: Tag = 'div',
    className,
    ...props
}, ref) => {
    const classNames = cn(className, 'fui-Flex', {
        [`fui-Flex--${dir}`]: dir,
        [`fui-Flex--align-${align}`]: align,
        [`fui-Flex--justify-${justify}`]: justify,
        [`fui-Flex--gap-${gap}`]: gap,
        'fui-Flex--inline': inline,
        'fui-Flex--wrap': wrap
    });

    return (
        <Tag ref={ref} className={classNames} {...props} />
    );
});

Flex.displayName = 'Flex';

Flex.Item = FlexItem;

export default Flex;