import { ForwardRefExoticComponent, forwardRef } from 'react';
import {
    Breadcrumb as FluentBreadcrumb,
    BreadcrumbProps as FluentBreadcrumbProps
} from '@fluentui/react-breadcrumb-preview';
import classnames from 'classnames';

import type { PropsWithChildren } from '../../types';

import BreadcrumbButton from './BreadcrumbButton';
import BreadcrumbDivider from './BreadcrumbDivider';
import BreadcrumbItem, { BreadcrumbItemProps } from './BreadcrumbItem';

export type BreadcrumbProps = PropsWithChildren<FluentBreadcrumbProps & {
    items?: BreadcrumbItemProps[];
}>;

const Breadcrumb: ForwardRefExoticComponent<BreadcrumbProps> & {
    Button?: typeof BreadcrumbButton;
    Divider?: typeof BreadcrumbDivider;
    Item?: typeof BreadcrumbItem;
} = forwardRef<HTMLElement, BreadcrumbProps>(({
    items,
    size,

    children,
    className,
    ...props
}, ref) => {
    return (
        <FluentBreadcrumb
            ref={ref}
            className={classnames(className, 'ui-Breadcrumb')}
            size={size}
            {...props}
        >
            {items?.map(item =>
                <BreadcrumbItem key={item.key} {...item} />
            )}
            {children}
        </FluentBreadcrumb>
    );
});

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Button = BreadcrumbButton;
Breadcrumb.Divider = BreadcrumbDivider;
Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;