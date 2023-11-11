import type { ReactNode } from 'react';
import {
    Tag as FluentTag,
    TagProps as FluentTagProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon, { IconProps } from '../Icon/Icon';

export type TagProps = Omit<FluentTagProps, 'content' | 'primaryText' | 'secondaryText'> & {
    content?: ReactNode;
    primaryContent?: ReactNode;
    secondaryContent?: ReactNode;
    icon?: ReactNode;
};

export default function Tag({
    content,
    primaryContent,
    secondaryContent,
    icon,
    size,

    className,
    children = content,
    ...props
}: TagProps) {
    return (
        <FluentTag
            className={classnames(className, 'ui-Tag')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={size as IconProps['size']} /> : icon
            }
            size={size}
            primaryText={primaryContent as FluentTagProps['primaryText']}
            secondaryText={secondaryContent as FluentTagProps['primaryText']}
            {...props}
        >
            {children}
        </FluentTag>
    );
}