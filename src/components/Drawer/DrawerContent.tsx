import { ReactNode, RefAttributes, forwardRef } from 'react';
import {
    DrawerBody
} from '@fluentui/react-components/unstable';

export type DrawerContentProps = {
    children?: ReactNode | ReactNode[];
} & RefAttributes<HTMLDivElement>;

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>((props, ref) => {
    return (
        <DrawerBody ref={ref} {...props} />
    );
});

export default DrawerContent;