import {
    MenuButton as FluentMenuButton,
    MenuButtonProps as FluentMenuButtonProps,
    MenuItemProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import type { ButtonProps } from '../Button';
import Icon from '../Icon/Icon';
import Menu, { MenuProps } from '../Menu/Menu';

export type MenuButtonProps = ButtonProps & Pick<FluentMenuButtonProps, 'menuIcon'> & {
    items?: MenuItemProps[];
    menu?: MenuProps;
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
                        <Icon name={icon} /> : undefined
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