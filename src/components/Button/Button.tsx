import { type ReactNode, forwardRef } from 'react';
import {
    Button as FluentButton,
    type ButtonProps as FluentButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

export type ButtonProps = Omit<FluentButtonProps, 'content'> & {
    content?: ReactNode;
    icon?: ReactNode;
};


const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(({
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
                <Icon name={icon} size={children ? 'small' : undefined} /> : icon
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