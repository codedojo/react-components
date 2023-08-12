import { type ReactNode, forwardRef } from 'react';
import {
    ToggleButton as FluentToggleButton,
    type ToggleButtonProps as FluentToggleButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

export type ToggleButtonProps = Omit<FluentToggleButtonProps, 'content'> & {
    content?: ReactNode;
};

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(({
    icon,
    content,

    children = content,
    className,
    ...props
}, ref) => {
    return (
        <FluentToggleButton
            ref={ref}
            className={classnames(className, 'ui-ToggleButton')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} /> : icon
            }
            {...props}
        >
            {children}
        </FluentToggleButton>
    );
});

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;