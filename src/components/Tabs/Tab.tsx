import { ReactNode } from 'react';
import {
    Tab as FluentTab,
    TabProps as FluentTabProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export type TabProps = Omit<FluentTabProps, 'content'> & {
    content?: ReactNode;
    icon?: ReactNode;
};

export default function Tab({
    content,
    icon,

    className,
    children = content,
    ...props
}: TabProps) {
    return (
        <FluentTab
            className={classnames(className, 'ui-Tab')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} /> : icon
            }
            {...props}
        >
            {children}
        </FluentTab>
    );
}