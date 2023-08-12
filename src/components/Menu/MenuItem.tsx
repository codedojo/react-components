import { type ReactElement } from 'react';
import {
    MenuItem as FluentMenuItem,
    MenuItemProps as FluentMenuItemProps
} from '@fluentui/react-components';

import Icon from '../Icon';

export type MenuItemProps = Omit<FluentMenuItemProps, 'content'> & {
    content?: string | ReactElement;
};

export default function MenuItem({
    icon,
    content,

    children = content,
    ...props
}: MenuItemProps) {
    return (
        <FluentMenuItem
            icon={typeof icon === 'string' ?
                <Icon name={icon} /> : icon
            }
            content={typeof content === 'string' ? content : undefined}
            {...props}
        >
            {children}
        </FluentMenuItem>
    );
}