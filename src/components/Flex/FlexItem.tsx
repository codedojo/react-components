import { forwardRef } from 'react';

import type { HTMLDivProps, PropsWithChildren } from '@/types';
import { classnames as cn } from '@/utils';

export type FlexItemProps = PropsWithChildren<{
    as?: 'div';
    alignX?: 'start' | 'center' | 'end';
    alignY?: 'start' | 'center' | 'end';
    alignCenter?: boolean;
    grow?: boolean;
    shrink?: boolean;
}, HTMLDivProps>;

const FlexItem = forwardRef<HTMLDivElement, FlexItemProps>(({
    alignX,
    alignY,
    alignCenter,
    grow = false,
    shrink = false,

    as: Tag = 'div',
    className,
    ...props
}, ref) => {
    const classNames = cn(className, 'fui-FlexItem', {
        [`fui-FlexItem--align-x-${alignX}`]: alignX,
        [`fui-FlexItem--align-y-${alignY}`]: alignY,
        'fui-FlexItem--align-center': alignCenter,
        'fui-FlexItem--grow': grow,
        'fui-FlexItem--shrink': shrink
    });

    return (
        <Tag ref={ref} className={classNames} {...props} />
    );
});

FlexItem.displayName = 'FlexItem';

export default FlexItem;