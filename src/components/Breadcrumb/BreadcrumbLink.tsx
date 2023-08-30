import { type ReactElement, type ReactNode, forwardRef } from 'react';
import {
    BreadcrumbLink as FluentBreadcrumbLink,
    BreadcrumbLinkProps as FluentBreadcrumbLinkProps
} from '@fluentui/react-breadcrumb-preview';
import classnames from 'classnames';

import type { HTMLAnchorProps, PropsWithChildren } from '@/types';

export type BreadcrumbLinkProps = PropsWithChildren<
    Pick<FluentBreadcrumbLinkProps,
        'appearance' |
        'current' |
        'disabled' |
        'overflow' |
        'size'
    > & {
        content?: ReactNode;
        icon?: string | ReactElement;
    },
    HTMLAnchorProps
>;

import Icon from '../Icon';

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(({
    content,
    icon,
    size,

    children = content,
    className,
    ...props
}, ref) => {
    return (
        <FluentBreadcrumbLink
            ref={ref}
            className={classnames(className, 'ui-BreadcrumbLink')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={size} /> : icon
            }
            size={size}
            {...props}
        >
            {children}
        </FluentBreadcrumbLink>
    );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

export default BreadcrumbLink;