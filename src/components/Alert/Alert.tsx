import type { ReactNode } from 'react';
import {
    Alert as FluentAlert,
    type AlertProps as FluentAlertProps
} from '@fluentui/react-components/unstable';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export type AlertProps = Omit<FluentAlertProps, 'content'> & {
    content?: ReactNode;
    icon?: ReactNode;
};

export default function Alert({
    icon,
    content,

    children = content,
    className,
    ...props
}: AlertProps) {
    return (
        <FluentAlert
            className={classnames(className, 'ui-Alert')}
            icon={icon && <Icon name={icon as string} />}
            {...props}
        >
            {children}
        </FluentAlert>
    );
}