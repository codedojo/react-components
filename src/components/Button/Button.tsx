import { ReactNode, ReactElement, forwardRef } from 'react';
import {
    Button as FluentButton,
    type ButtonProps as FluentButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

export type ButtonProps = FluentButtonProps & {
    content?: ReactNode;
    icon?: string | ReactElement;
};

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
                <Icon name={icon} size={children ? 'small' : undefined} /> : icon
            }
            size={size}
            {...props}
        >
            {children}
        </FluentButton>
    );
});

export default Button;