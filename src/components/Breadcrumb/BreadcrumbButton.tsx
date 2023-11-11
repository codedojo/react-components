import { type ReactElement, type ReactNode, forwardRef } from 'react';
import {
    BreadcrumbButton as FluentBreadcrumbButton,
    BreadcrumbButtonProps as FluentBreadcrumbButtonProps
} from '@fluentui/react-breadcrumb-preview';
import classnames from 'classnames';

import type { HTMLButtonProps, HTMLAnchorProps, PropsWithChildren } from '../../types';

export type BreadcrumbButtonProps = PropsWithChildren<
    Pick<FluentBreadcrumbButtonProps, 'current' | 'size'> & {
        content?: ReactNode;
        icon?: string | ReactElement;
    },
    HTMLButtonProps & HTMLAnchorProps
>;

import Icon from '../Icon';

const BreadcrumbButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, BreadcrumbButtonProps>(({
    content,
    icon,
    size,

    children = content,
    className,
    ...props
}, ref) => {
    return (
        <FluentBreadcrumbButton
            ref={ref}
            className={classnames(className, 'ui-BreadcrumbButton')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={size} /> : icon
            }
            size={size}
            {...props}
        >
            {children}
        </FluentBreadcrumbButton>
    );
});

BreadcrumbButton.displayName = 'BreadcrumbButton';

export default BreadcrumbButton;