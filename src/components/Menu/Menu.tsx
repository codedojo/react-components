import { ReactElement, ReactNode } from 'react';
import {
    Menu as FluentMenu,
    MenuProps as FluentMenuProps,
    MenuTrigger,
    MenuPopover,
    MenuList
} from '@fluentui/react-components';

import Icon from '../Icon';

import MenuItem, { MenuItemProps } from './MenuItem';

export type MenuProps = Omit<FluentMenuProps, 'children'> & {
    trigger?: ReactElement;
    items?: MenuItemProps[];

    className?: string;
    children?: ReactNode | ReactNode[];
};

export default function Menu({
    trigger,
    items,

    children,
    ...props
}: MenuProps) {
    return (
        <FluentMenu {...props}>
            <MenuTrigger>
                {trigger}
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    {items?.map(({ icon, ...props }) =>
                        <MenuItem
                            key={props.key}
                            icon={typeof icon === 'string' ?
                                <Icon name={icon} /> : icon
                            }
                            {...props}
                        />
                    )}
                    {children}
                </MenuList>
            </MenuPopover>
        </FluentMenu>
    );
}

Menu.Item = MenuItem;