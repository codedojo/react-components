import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import Modal from '../Modal/Modal';

export type LayerProps = CSSTransitionProps & {
    modal?: boolean;
    fixed?: boolean;

    children?: ReactNode | ReactNode[];
};

export default function Layer({
    modal = false,
    fixed = false,

    children,
    ...props
}: LayerProps) {
    return (
        <CSSTransition {...props}>
            {modal ?
                <Modal fixed={fixed}>
                    {children}
                </Modal>
                :
                children
            }
        </CSSTransition>
    );
}