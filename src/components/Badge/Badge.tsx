import { ReactNode } from 'react';
import {
    Badge as FluentBadge,
    type BadgeProps as FluentBadgeProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export type BadgeProps = FluentBadgeProps & {
    content?: ReactNode;
    icon?: ReactNode;
};

export default function Badge({
    icon,
    content,

    children = content,
    className,
    ...props
}: BadgeProps) {
    return (
        <FluentBadge
            className={classnames(className, 'ui-Badge')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={children ? 'small' : undefined} /> : icon
            }
            {...props}
        >
            {children}
        </FluentBadge>
    );
}