import { ForwardRefExoticComponent, ReactNode, forwardRef } from 'react';
import {
    Drawer as FluentDrawer,
    DrawerProps as FluentDrawerProps
} from '@fluentui/react-components/unstable';
import classnames from 'classnames';

import DrawerContent, { type DrawerContentProps } from './DrawerContent';
import DrawerHeader, { type DrawerHeaderProps } from './DrawerHeader';

export type DrawerProps = FluentDrawerProps & {
    title?: ReactNode;
    content?: ReactNode;
    onClose?: () => void;
};

const Drawer: ForwardRefExoticComponent<DrawerProps> & {
    Content?: ForwardRefExoticComponent<DrawerContentProps>;
    Header?: ForwardRefExoticComponent<DrawerHeaderProps>;
} = forwardRef<HTMLDivElement, DrawerProps>(({
    title,
    content,
    onClose,

    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames('ui-Drawer', className);

    return (
        <FluentDrawer ref={ref} className={classNames} {...props}>
            {title &&
                <DrawerHeader title={title} />
            }

            {content &&
                <DrawerContent>{content}</DrawerContent>
            }

            {children}
        </FluentDrawer>
    );
});

Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;

export default Drawer;