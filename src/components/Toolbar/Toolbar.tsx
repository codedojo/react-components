import { ReactElement } from 'react';
import {
    Toolbar as FluentToolbar,
    ToolbarProps as FluentToolbarProps,
    ToolbarButton,
    ToolbarButtonProps as FluentToolbarButtonProps,
    ToolbarToggleButtonProps as FluentToolbarToggleButtonProps,
    ToolbarDivider,
    ToolbarToggleButton
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export type ToolbarButtonProps = Omit<FluentToolbarButtonProps, 'icon'> & {
    icon?: string | ReactElement;
};

export type ToolbarToggleButtonProps = Omit<FluentToolbarToggleButtonProps, 'icon' | 'toggle'> & {
    icon?: string | ReactElement;
    toggle?: boolean;
};

export type ToolbarProps = Omit<FluentToolbarProps, 'buttons'> & {
    buttons?: Array<ToolbarButtonProps | ToolbarToggleButtonProps>;
};

export default function Toolbar({
    buttons,

    className,
    children,
    ...props
}: ToolbarProps) {
    return (
        <FluentToolbar
            className={classnames(className, 'ui-Toolbar')}
            {...props}
        >
            {buttons?.map(({ key, icon, ...props }: ToolbarButtonProps | ToolbarToggleButtonProps) =>
                (props as ToolbarToggleButtonProps).toggle ?
                    // @ts-ignore
                    <ToolbarToggleButton
                        key={key}
                        icon={typeof icon === 'string' ?
                            <Icon name={icon} /> : icon
                        }
                        {...props as ToolbarToggleButtonProps}
                    />
                    :
                    // @ts-ignore
                    <ToolbarButton
                        key={key}
                        icon={typeof icon === 'string' ?
                            <Icon name={icon} /> : icon
                        }
                        {...props as ToolbarButtonProps}
                    />
            )}
            {children}
        </FluentToolbar>
    );
}

Toolbar.Button = ToolbarButton;
Toolbar.Divider = ToolbarDivider;
Toolbar.ToggleButton = ToolbarToggleButton;

export {
    ToolbarButton,
    ToolbarDivider,
    ToolbarToggleButton
};