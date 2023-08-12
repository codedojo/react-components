import { type ReactElement, type ReactNode, forwardRef } from 'react';
import {
    CompoundButton as FluentCompoundButton,
    type CompoundButtonProps as FluentCompoundButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

export type CompoundButtonProps = Omit<FluentCompoundButtonProps, 'content' | 'primaryContent' | 'secondaryContent'> & {
    content?: ReactNode;
    primaryContent?: ReactNode;
    secondaryContent?: string | ReactElement;
};

const CompoundButton = forwardRef<HTMLButtonElement, CompoundButtonProps>(({
    icon,
    content,
    primaryContent = content,

    children = primaryContent,
    className,
    ...props
}, ref) => {
    return (
        <FluentCompoundButton
            ref={ref}
            className={classnames(className, 'ui-CompoundButton')}
            icon={typeof icon === 'string' ?
                <Icon name={icon} /> : icon
            }
            {...props}
        >
            {children}
        </FluentCompoundButton>
    );
});

CompoundButton.displayName = 'CompoundButton';

export default CompoundButton;