import { ReactNode, forwardRef } from 'react';
import {
    CompoundButton as FluentCompoundButton,
    type CompoundButtonProps as FluentCompoundButtonProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

export type CompoundButtonProps = FluentCompoundButtonProps & {
    content?: ReactNode;
    primaryContent?: ReactNode;
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

export default CompoundButton;