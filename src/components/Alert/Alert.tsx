import {
    Alert as FluentAlert,
    type AlertProps as FluentAlertProps
} from '@fluentui/react-components/unstable';
import classnames from 'classnames';
import { ReactNode } from 'react';

import Icon from '../Icon/Icon';

export type AlertProps = FluentAlertProps & {
    icon?: ReactNode;
    content?: ReactNode;

    className?: string;
    children?: ReactNode | ReactNode[];
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