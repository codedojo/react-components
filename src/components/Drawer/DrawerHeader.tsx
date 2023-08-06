import { ReactElement, ReactNode, forwardRef } from 'react';
import {
    DrawerHeader as FluentDrawerHeader,
    DrawerHeaderTitle,
    DrawerHeaderNavigation
} from '@fluentui/react-components/unstable';

import Button from '../Button';

export type DrawerHeaderProps = {
    title?: ReactNode;
    content?: ReactNode;
    action?: ReactElement;
    actions?: ReactElement | ReactElement[];
    closeIcon?: string | ReactElement;
    onCloseIconClick?: () => void;

    as?: 'header';
    children?: ReactNode | ReactNode[];
};

const DrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(({
    title,
    content,
    action,
    closeIcon,
    actions,
    onCloseIconClick,

    children = content,
    ...props
}, ref) => {
    return (
        <FluentDrawerHeader ref={ref} {...props}>
            {actions &&
                <DrawerHeaderNavigation>
                    {actions}
                </DrawerHeaderNavigation>
            }

            <DrawerHeaderTitle
                action={closeIcon ?
                    <Button
                        icon={closeIcon}
                        appearance="subtle"
                        onClick={onCloseIconClick}
                    />
                    :
                    action
                }
            >
                {title}
            </DrawerHeaderTitle>

            {children}
        </FluentDrawerHeader>
    );
});

DrawerHeader.displayName = 'DrawerHeader';

export default DrawerHeader;