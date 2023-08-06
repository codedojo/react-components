import { ReactNode } from 'react';
import {
    MenuButton as FluentMenuButton,
    MenuButtonProps as FluentMenuButtonProps,
    MenuItemProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon/Icon';
import Menu, { MenuProps } from '../Menu/Menu';

export type MenuButtonProps = FluentMenuButtonProps & {
    content?: ReactNode;
    icon?: ReactNode;
    items?: MenuItemProps[];
    menu?: MenuProps;

    className?: string;
    children?: ReactNode | ReactNode[];
};

export default function MenuButton({
    content,
    icon = 'more_vert',
    items = [],
    menu = {},

    className,
    children = content,
    ...props
}: MenuButtonProps) {
    return (
        <Menu
            trigger={
                <FluentMenuButton
                    className={classnames(className, 'ui-MenuButton')}
                    icon={typeof icon === 'string' ?
                        <Icon name={icon} />
                        :
                        icon
                    }
                    {...props}
                >
                    {children}
                </FluentMenuButton>
            }
            items={items}
            {...menu}
        />
    );
}