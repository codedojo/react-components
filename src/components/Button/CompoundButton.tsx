import { type ReactElement, type ReactNode, forwardRef } from 'react';
import {
    CompoundButton as FluentCompoundButton
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

import type { ButtonProps } from './Button';

export type CompoundButtonProps = ButtonProps & {
    primaryContent?: ReactNode;
    secondaryContent?: string | ReactElement;
};

const CompoundButton = forwardRef<HTMLButtonElement, CompoundButtonProps>(({
    icon,
    content,
    primaryContent = content,
    size,

    children = primaryContent,
    className,
    ...props
}, ref) => {
    return (
        <FluentCompoundButton
            ref={ref}
            className={classnames(className, 'ui-CompoundButton')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} size={size} /> : icon
            }
            {...props}
        >
            {children}
        </FluentCompoundButton>
    );
});

CompoundButton.displayName = 'CompoundButton';

export default CompoundButton;