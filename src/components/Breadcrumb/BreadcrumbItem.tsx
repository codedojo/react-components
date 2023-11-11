import { ReactNode, forwardRef } from 'react';
import {
    BreadcrumbItem as FluentBreadcrumbItem,
    BreadcrumbItemProps as FluentBreadcrumbItemProps
} from '@fluentui/react-breadcrumb-preview';
import classnames from 'classnames';

import type { PropsWithChildren } from '../../types';

export type BreadcrumbItemProps = PropsWithChildren<Omit<FluentBreadcrumbItemProps, 'content' | 'icon'> & {
    content?: ReactNode;
}>;

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(({
    content,
    size,

    children = content,
    className,
    ...props
}, ref) => {
    return (
        <FluentBreadcrumbItem
            ref={ref}
            className={classnames(className, 'ui-BreadcrumbItem')}
            size={size}
            {...props}
        >
            {children}
        </FluentBreadcrumbItem>
    );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;