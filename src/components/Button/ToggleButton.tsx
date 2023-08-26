import { forwardRef } from 'react';
import {
    ToggleButton as FluentToggleButton,
    type ToggleButtonProps as FluentToggleButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

import type { ButtonProps } from './Button';

export type ToggleButtonProps = ButtonProps & Pick<FluentToggleButtonProps, 'defaultChecked' | 'checked'>;

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(({
    icon,
    content,
    size,

    children = content,
    className,
    ...props
}, ref) => {
    return (
        <FluentToggleButton
            ref={ref}
            className={classnames(className, 'ui-ToggleButton')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={size} /> : icon
            }
            {...props}
        >
            {children}
        </FluentToggleButton>
    );
});

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;