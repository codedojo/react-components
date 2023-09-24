import { ReactElement, ReactNode } from 'react';
import {
    Dialog as FluentDialog,
    DialogProps as FluentDialogProps,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger
} from '@fluentui/react-components';
import classnames from 'classnames';

export type DialogProps = Omit<FluentDialogProps, 'content' | 'children'> & {
    trigger?: ReactElement;
    title?: ReactNode;
    content?: ReactNode;
    actions?: ReactElement[];
    onClose?: () => void;

    className?: string;
    children?: ReactNode | ReactNode[];
};

function Dialog({
    trigger,
    title,
    content,
    actions,

    children,
    className,
    ...props
}: DialogProps) {
    return (
        <FluentDialog {...props}>
            {!trigger ? <></> :
                <DialogTrigger>
                    {trigger}
                </DialogTrigger>
            }

            <DialogSurface className={classnames(className, 'ui-Dialog')}>
                <DialogBody>
                    {title &&
                        <DialogTitle>{title}</DialogTitle>
                    }

                    {content &&
                        <DialogContent>{content}</DialogContent>
                    }

                    {actions &&
                        <DialogActions>
                            {actions}
                        </DialogActions>
                    }

                    {children}
                </DialogBody>
            </DialogSurface>
        </FluentDialog>
    );
}

Dialog.displayName = 'Dialog';

Dialog.Actions = DialogActions;
Dialog.Body = DialogBody;
Dialog.Content = DialogContent;
Dialog.Surface = DialogSurface;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;

export {
    Dialog as default,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger
};