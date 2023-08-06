import { ReactNode, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { cssClasses } from './constants';

export type ModalProps = {
    fixed?: boolean;

    as?: string;
    children?: ReactNode | ReactNode[];
};

export default function Modal({
    fixed = false,

    as = 'div',
    children
}: ModalProps) {
    const rootRef = useRef<HTMLElement>(document.createElement(as));

    useEffect(() => {
        const root = rootRef.current;
        const activeElement = document.activeElement as HTMLElement;

        if (!root) return;

        root.className = cssClasses.ROOT;

        if (fixed) {
            root.classList.add(cssClasses.FIXED);
        }

        document.body.appendChild(root);
        (root.firstElementChild as HTMLElement)?.focus();

        return () => {
            activeElement?.focus();
            document.body.removeChild(root);
        };
    }, [fixed]);

    return createPortal(children, rootRef.current);
}