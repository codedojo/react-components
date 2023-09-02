import { ForwardRefExoticComponent, ReactNode, forwardRef } from 'react';
import {
    Drawer as FluentDrawer,
    DrawerProps as FluentDrawerProps
} from '@fluentui/react-components/unstable';
import classnames from 'classnames';

import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';

export type DrawerProps = Omit<FluentDrawerProps, 'content'> & {
    title?: ReactNode;
    content?: ReactNode;
    onClose?: () => void;
};

const Drawer: ForwardRefExoticComponent<DrawerProps> & {
    Content?: typeof DrawerContent;
    Header?: typeof DrawerHeader;
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
                <DrawerHeader title={title} onCloseIconClick={onClose} />
            }

            {content &&
                <DrawerContent>{content}</DrawerContent>
            }

            {children}
        </FluentDrawer>
    );
});

Drawer.displayName = 'Drawer';

Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;

export default Drawer;