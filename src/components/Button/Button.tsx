import { type ReactNode, forwardRef } from 'react';
import {
    Button as FluentButton,
    type ButtonProps as FluentButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import type { PropsWithChildren, HTMLButtonProps, HTMLAnchorProps } from '@/types';

import Icon from '../Icon';

export type ButtonProps = PropsWithChildren<
    Pick<FluentButtonProps,
        'appearance' |
        'disabledFocusable' |
        'iconPosition' |
        'shape' |
        'size'
    > & {
        content?: ReactNode;
        icon?: ReactNode;
    },
    HTMLButtonProps & HTMLAnchorProps
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    content,
    icon,
    size,

    children = content,
    className,
    ...props
}, ref) => {
    return (
        <FluentButton
            ref={ref}
            className={classnames(className, 'ui-Button')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={children ? 'small' : undefined} /> : undefined
            }
            size={size}
            {...props}
        >
            {children}
        </FluentButton>
    );
});

Button.displayName = 'Button';

export default Button;